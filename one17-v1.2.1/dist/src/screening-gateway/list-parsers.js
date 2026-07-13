"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseOfacSdnCsv = parseOfacSdnCsv;
exports.parseUnConsolidatedXml = parseUnConsolidatedXml;
exports.parseUkSanctionsCsv = parseUkSanctionsCsv;
exports.parseEuFsfXml = parseEuFsfXml;
const fast_xml_parser_1 = require("fast-xml-parser");
const xmlParser = new fast_xml_parser_1.XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
function asArray(v) {
    if (v == null)
        return [];
    return Array.isArray(v) ? v : [v];
}
function textOf(v) {
    if (v == null)
        return undefined;
    if (typeof v === 'string')
        return v.trim() || undefined;
    if (typeof v === 'object' && '#text' in v) {
        return textOf(v['#text']);
    }
    return String(v).trim() || undefined;
}
function parseCsv(raw) {
    const rows = [];
    let row = [];
    let field = '';
    let inQuotes = false;
    const text = raw.replace(/\r\n/g, '\n');
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (inQuotes) {
            if (c === '"') {
                if (text[i + 1] === '"') {
                    field += '"';
                    i++;
                }
                else
                    inQuotes = false;
            }
            else
                field += c;
        }
        else if (c === '"') {
            inQuotes = true;
        }
        else if (c === ',') {
            row.push(field);
            field = '';
        }
        else if (c === '\n') {
            row.push(field);
            field = '';
            if (row.some((f) => f.length > 0))
                rows.push(row);
            row = [];
        }
        else {
            field += c;
        }
    }
    if (field.length > 0 || row.length > 0) {
        row.push(field);
        if (row.some((f) => f.length > 0))
            rows.push(row);
    }
    return rows;
}
const OFAC_NULL = '-0-';
function ofacField(v) {
    const t = v?.trim();
    return !t || t === OFAC_NULL ? undefined : t;
}
function parseOfacSdnCsv(raw, listVersion) {
    const rows = parseCsv(raw);
    const entries = [];
    for (const cols of rows) {
        if (cols.length < 3)
            continue;
        const [entNum, sdnName, sdnType, program, title, callSign, vessType, tonnage, grt, vessFlag, vessOwner, remarks] = cols;
        const name = ofacField(sdnName);
        if (!entNum?.trim() || !name)
            continue;
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
function parseUnConsolidatedXml(raw, listVersion) {
    const doc = xmlParser.parse(raw);
    const root = doc.CONSOLIDATED_LIST ?? doc;
    const entries = [];
    for (const ind of asArray(root?.INDIVIDUALS?.INDIVIDUAL)) {
        const nameParts = [ind.FIRST_NAME, ind.SECOND_NAME, ind.THIRD_NAME, ind.FOURTH_NAME].map(textOf).filter(Boolean);
        const primaryName = nameParts.join(' ').trim();
        const dataId = textOf(ind.DATAID) ?? textOf(ind.REFERENCE_NUMBER);
        if (!primaryName || !dataId)
            continue;
        const aliases = asArray(ind.INDIVIDUAL_ALIAS).map((a) => textOf(a?.ALIAS_NAME)).filter((x) => !!x);
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
        if (!primaryName || !dataId)
            continue;
        const aliases = asArray(ent.ENTITY_ALIAS).map((a) => textOf(a?.ALIAS_NAME)).filter((x) => !!x);
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
function findCol(header, ...needles) {
    const lower = header.map((h) => h.toLowerCase());
    for (const needle of needles) {
        const idx = lower.findIndex((h) => h.includes(needle));
        if (idx >= 0)
            return idx;
    }
    return -1;
}
function parseUkSanctionsCsv(raw, listVersion) {
    const rows = parseCsv(raw);
    if (rows.length === 0)
        return { listVersion, entries: [] };
    const header = rows[0];
    const idCol = findCol(header, 'unique id', 'group id', 'id number');
    const name1Col = findCol(header, 'name 1', 'primary name', 'name');
    const aliasCols = header.map((h, i) => (/^name\s*[2-6]/i.test(h) ? i : -1)).filter((i) => i >= 0);
    const dobCol = findCol(header, 'date of birth', 'dob');
    const natCol = findCol(header, 'nationality');
    const regimeCol = findCol(header, 'regime');
    const typeCol = findCol(header, 'individual/entity', 'type');
    const entries = [];
    for (const cols of rows.slice(1)) {
        const id = idCol >= 0 ? cols[idCol]?.trim() : undefined;
        const name = name1Col >= 0 ? cols[name1Col]?.trim() : undefined;
        if (!id || !name)
            continue;
        entries.push({
            sourceRecordId: id,
            primaryName: name,
            aliases: aliasCols.map((i) => cols[i]?.trim()).filter((x) => !!x),
            dateOfBirth: dobCol >= 0 ? cols[dobCol]?.trim() || undefined : undefined,
            nationality: natCol >= 0 ? cols[natCol]?.trim() || undefined : undefined,
            entityType: typeCol >= 0 ? cols[typeCol]?.trim() || undefined : undefined,
            programme: regimeCol >= 0 ? cols[regimeCol]?.trim() || undefined : undefined,
            rawDetail: Object.fromEntries(header.map((h, i) => [h || `col${i}`, cols[i]])),
        });
    }
    return { listVersion, entries };
}
function parseEuFsfXml(raw, listVersion) {
    const doc = xmlParser.parse(raw);
    const root = doc.export ?? doc;
    const entries = [];
    for (const subj of asArray(root?.sanctionEntity)) {
        const logicalId = textOf(subj?.['@_logicalId']) ?? textOf(subj?.euReferenceNumber);
        const nameAliases = asArray(subj?.nameAlias);
        const primaryAlias = nameAliases.find((a) => textOf(a?.['@_strong']) !== 'false') ?? nameAliases[0];
        const primaryName = textOf(primaryAlias?.['@_wholeName']) ?? [textOf(primaryAlias?.['@_firstName']), textOf(primaryAlias?.['@_lastName'])].filter(Boolean).join(' ');
        if (!logicalId || !primaryName)
            continue;
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
//# sourceMappingURL=list-parsers.js.map