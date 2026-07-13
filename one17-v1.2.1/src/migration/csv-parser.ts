// Minimal RFC4180-style CSV parser: quoted fields (with embedded commas,
// newlines, and escaped "" quotes) plus plain unquoted fields. The Migration
// Data Standards templates are UTF-8, comma-separated, header row exact —
// no library dependency needed for that shape, and this keeps the migration
// module dependency-free like the rest of this codebase's services.
export function parseCsv(content: string): Record<string, string>[] {
  const rows = parseCsvRows(content.replace(/^﻿/, ''));
  if (rows.length === 0) return [];
  const header = rows[0];
  return rows.slice(1)
    .filter((row) => row.some((cell) => cell.trim() !== ''))
    .map((row) => {
      const record: Record<string, string> = {};
      header.forEach((col, i) => {
        record[col] = row[i] ?? '';
      });
      return record;
    });
}

// Exported for consumers that need raw row arrays rather than name-keyed
// objects (e.g. the Budget sheets, which have duplicate/blank column labels
// and are addressed by column index, not name).
export function parseCsvRows(content: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let inQuotes = false;
  let i = 0;
  while (i < content.length) {
    const char = content[i];
    if (inQuotes) {
      if (char === '"') {
        if (content[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i++;
        continue;
      }
      field += char;
      i++;
      continue;
    }
    if (char === '"') {
      inQuotes = true;
      i++;
      continue;
    }
    if (char === ',') {
      row.push(field);
      field = '';
      i++;
      continue;
    }
    if (char === '\r') {
      i++;
      continue;
    }
    if (char === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
      i++;
      continue;
    }
    field += char;
    i++;
  }
  if (field !== '' || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}
