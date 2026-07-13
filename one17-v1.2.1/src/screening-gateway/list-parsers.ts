import { XMLParser } from 'fast-xml-parser';
import { ParsedListEntry, ParsedListResult } from './screening-gateway.types';

// ============================================================================
// Invariant 72(a) parsers -- one per source, each converting that source's
// OWN real, official, machine-readable file format into ParsedListEntry[].
// Never scrapes a search page; every parser here consumes a file the
// publisher itself designed for programmatic download.
//
// Verification confidence, recorded honestly (never silently assumed):
//   OFAC:  HIGH -- ofac.treasury.gov's own FAQ text confirms the legacy
//          sdn.csv is a headerless, positional CSV whose first three
//          columns are ent_num/SDN_Name/SDN_Type (live-fetched 13-Jul-2026);
//          the full 12-column layout below is OFAC's long-stable public
//          legacy specification.
//   UN_SC: HIGH -- main.un.org publishes the Consolidated List XML in the
//          UN Secretariat's own long-stable schema (INDIVIDUALS/ENTITIES
//          root elements), live-confirmed to exist at a stable URL.
//   UK_SANCTIONS: MEDIUM -- gov.uk's "Format guide for the UK Sanctions
//          List" confirms CSV is one of 7 identical-data formats at a
//          stable static URL (live-confirmed), but this parser's exact
//          column-NAME matching (not position -- the modern gov.uk CSV is
//          header-labeled) is a best-effort mapping, not a byte-verified
//          field list. FLAGGED in CHECK26_EVIDENCE.md for Compliance
//          reverification against a live pull before this source is relied
//          on for a real GREEN/RED determination.
//   EU_FSF: MEDIUM -- webgate.ec.europa.eu/fsd's token-gated XML endpoint
//          is live-confirmed real (not scraping), but this parser's exact
//          element names are a best-effort mapping against the EU FSF's
//          publicly documented schema shape, same reverification flag as
//          UK_SANCTIONS.
// ============================================================================

const xmlParser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });

function asArray<T>(v: T | T[] | undefined | null): T[] {
  if (v == null) return [];
  return Array.isArray(v) ? v : [v];
}

function textOf(v: unknown): string | undefined {
  if (v == null) return undefined;
  if (typeof v === 'string') return v.trim() || undefined;
  if (typeof v === 'object' && '#text' in (v as Record<string, unknown>)) {
    return textOf((v as Record<string, unknown>)['#text']);
  }
  return String(v).trim() || undefined;
}

// RFC4180-ish CSV line splitter -- handles quoted fields with embedded
// commas/quotes, which OFAC's Remarks field and UK's address fields both
// require. No npm dependency needed for this scope.
function parseCsv(raw: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let inQuotes = false;
  const text = raw.replace(/\r\n/g, '\n');
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field); field = '';
    } else if (c === '\n') {
      row.push(field); field = '';
      if (row.some((f) => f.length > 0)) rows.push(row);
      row = [];
    } else {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) { row.push(field); if (row.some((f) => f.length > 0)) rows.push(row); }
  return rows;
}

// ---------------------------------------------------------------------------
// OFAC SDN list (sdn.csv) -- legacy headerless positional CSV.
// Columns: ent_num, SDN_Name, SDN_Type, Program, Title, Call_Sign,
// Vess_type, Tonnage, GRT, Vess_flag, Vess_owner, Remarks.
// A field value of "-0-" is OFAC's own null-marker convention -- never
// treated as literal data.
// ---------------------------------------------------------------------------
const OFAC_NULL = '-0-';
function ofacField(v: string | undefined): string | undefined {
  const t = v?.trim();
  return !t || t === OFAC_NULL ? undefined : t;
}

export function parseOfacSdnCsv(raw: string, listVersion: string): ParsedListResult {
  const rows = parseCsv(raw);
  const entries: ParsedListEntry[] = [];
  for (const cols of rows) {
    if (cols.length < 3) continue;
    const [entNum, sdnName, sdnType, program, title, callSign, vessType, tonnage, grt, vessFlag, vessOwner, remarks] = cols;
    const name = ofacField(sdnName);
    if (!entNum?.trim() || !name) continue;
    entries.push({
      sourceRecordId: entNum.trim(),
      primaryName: name,
      aliases: [],
      entityType: ofacField(sdnType),
      programme: ofacField(program),
      rawDetail: {
        title: ofacField(title), callSign: ofacField(callSign), vessType: ofacField(vessType),
        tonnage: ofacField(tonnage), grt: ofacField(grt), vessFlag: ofacField(vessFlag),
        vessOwner: ofacField(vessOwner), remarks: ofacField(remarks),
      },
    });
  }
  return { listVersion, entries };
}

// ---------------------------------------------------------------------------
// UN Security Council Consolidated List XML.
// ---------------------------------------------------------------------------
export function parseUnConsolidatedXml(raw: string, listVersion: string): ParsedListResult {
  const doc = xmlParser.parse(raw) as Record<string, any>;
  const root = doc.CONSOLIDATED_LIST ?? doc;
  const entries: ParsedListEntry[] = [];

  for (const ind of asArray(root?.INDIVIDUALS?.INDIVIDUAL)) {
    const nameParts = [ind.FIRST_NAME, ind.SECOND_NAME, ind.THIRD_NAME, ind.FOURTH_NAME].map(textOf).filter(Boolean);
    const primaryName = nameParts.join(' ').trim();
    const dataId = textOf(ind.DATAID) ?? textOf(ind.REFERENCE_NUMBER);
    if (!primaryName || !dataId) continue;
    const aliases = asArray(ind.INDIVIDUAL_ALIAS).map((a) => textOf(a?.ALIAS_NAME)).filter((x): x is string => !!x);
    const dob = asArray(ind.INDIVIDUAL_DATE_OF_BIRTH)[0];
    const nat = asArray(ind.NATIONALITY?.VALUE)[0] ?? textOf(ind.NATIONALITY);
    entries.push({
      sourceRecordId: `IND-${dataId}`,
      primaryName,
      aliases,
      dateOfBirth: textOf(dob?.DATE) ?? textOf(dob?.YEAR),
      nationality: textOf(nat),
      entityType: 'INDIVIDUAL',
      programme: textOf(ind.UN_LIST_TYPE),
      rawDetail: { referenceNumber: textOf(ind.REFERENCE_NUMBER), listedOn: textOf(ind.LISTED_ON), comments: textOf(ind.COMMENTS1) },
    });
  }

  for (const ent of asArray(root?.ENTITIES?.ENTITY)) {
    const primaryName = textOf(ent.FIRST_NAME) ?? textOf(ent.NAME_ORIGINAL_SCRIPT);
    const dataId = textOf(ent.DATAID) ?? textOf(ent.REFERENCE_NUMBER);
    if (!primaryName || !dataId) continue;
    const aliases = asArray(ent.ENTITY_ALIAS).map((a) => textOf(a?.ALIAS_NAME)).filter((x): x is string => !!x);
    entries.push({
      sourceRecordId: `ENT-${dataId}`,
      primaryName,
      aliases,
      entityType: 'ENTITY',
      programme: textOf(ent.UN_LIST_TYPE),
      rawDetail: { referenceNumber: textOf(ent.REFERENCE_NUMBER), listedOn: textOf(ent.LISTED_ON), comments: textOf(ent.COMMENTS1) },
    });
  }

  return { listVersion, entries };
}

// ---------------------------------------------------------------------------
// UK Sanctions List CSV -- modern gov.uk publication, header-labeled (NOT
// positional like OFAC's legacy file). Matched by best-effort column-name
// heuristics (case-insensitive substring) -- see the MEDIUM-confidence
// disclosure at the top of this file.
// ---------------------------------------------------------------------------
function findCol(header: string[], ...needles: string[]): number {
  const lower = header.map((h) => h.toLowerCase());
  for (const needle of needles) {
    const idx = lower.findIndex((h) => h.includes(needle));
    if (idx >= 0) return idx;
  }
  return -1;
}

export function parseUkSanctionsCsv(raw: string, listVersion: string): ParsedListResult {
  const rows = parseCsv(raw);
  if (rows.length === 0) return { listVersion, entries: [] };
  const header = rows[0];
  const idCol = findCol(header, 'unique id', 'group id', 'id number');
  const name1Col = findCol(header, 'name 1', 'primary name', 'name');
  const aliasCols = header.map((h, i) => (/^name\s*[2-6]/i.test(h) ? i : -1)).filter((i) => i >= 0);
  const dobCol = findCol(header, 'date of birth', 'dob');
  const natCol = findCol(header, 'nationality');
  const regimeCol = findCol(header, 'regime');
  const typeCol = findCol(header, 'individual/entity', 'type');

  const entries: ParsedListEntry[] = [];
  for (const cols of rows.slice(1)) {
    const id = idCol >= 0 ? cols[idCol]?.trim() : undefined;
    const name = name1Col >= 0 ? cols[name1Col]?.trim() : undefined;
    if (!id || !name) continue;
    entries.push({
      sourceRecordId: id,
      primaryName: name,
      aliases: aliasCols.map((i) => cols[i]?.trim()).filter((x): x is string => !!x),
      dateOfBirth: dobCol >= 0 ? cols[dobCol]?.trim() || undefined : undefined,
      nationality: natCol >= 0 ? cols[natCol]?.trim() || undefined : undefined,
      entityType: typeCol >= 0 ? cols[typeCol]?.trim() || undefined : undefined,
      programme: regimeCol >= 0 ? cols[regimeCol]?.trim() || undefined : undefined,
      rawDetail: Object.fromEntries(header.map((h, i) => [h || `col${i}`, cols[i]])),
    });
  }
  return { listVersion, entries };
}

// ---------------------------------------------------------------------------
// EU Financial Sanctions Files (FSF) XML.
// ---------------------------------------------------------------------------
export function parseEuFsfXml(raw: string, listVersion: string): ParsedListResult {
  const doc = xmlParser.parse(raw) as Record<string, any>;
  const root = doc.export ?? doc;
  const entries: ParsedListEntry[] = [];

  for (const subj of asArray(root?.sanctionEntity)) {
    const logicalId = textOf(subj?.['@_logicalId']) ?? textOf(subj?.euReferenceNumber);
    const nameAliases = asArray(subj?.nameAlias);
    const primaryAlias = nameAliases.find((a) => textOf(a?.['@_strong']) !== 'false') ?? nameAliases[0];
    const primaryName = textOf(primaryAlias?.['@_wholeName']) ?? [textOf(primaryAlias?.['@_firstName']), textOf(primaryAlias?.['@_lastName'])].filter(Boolean).join(' ');
    if (!logicalId || !primaryName) continue;
    const aliases = nameAliases
      .map((a) => textOf(a?.['@_wholeName']) ?? [textOf(a?.['@_firstName']), textOf(a?.['@_lastName'])].filter(Boolean).join(' '))
      .filter((n) => !!n && n !== primaryName);
    const birthdate = asArray(subj?.birthdate)[0];
    const citizenship = asArray(subj?.citizenship)[0];
    const regulation = asArray(subj?.regulation)[0];
    entries.push({
      sourceRecordId: logicalId,
      primaryName,
      aliases,
      dateOfBirth: textOf(birthdate?.['@_birthdate']),
      nationality: textOf(citizenship?.['@_countryDescription']) ?? textOf(citizenship?.['@_countryIso2Code']),
      entityType: textOf(subj?.['@_subjectType']),
      programme: textOf(regulation?.['@_programme']) ?? textOf(regulation?.['@_numberTitle']),
      rawDetail: { remark: textOf(subj?.remark) },
    });
  }
  return { listVersion, entries };
}
