"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCsv = parseCsv;
exports.parseCsvRows = parseCsvRows;
function parseCsv(content) {
    const rows = parseCsvRows(content.replace(/^﻿/, ''));
    if (rows.length === 0)
        return [];
    const header = rows[0];
    return rows.slice(1)
        .filter((row) => row.some((cell) => cell.trim() !== ''))
        .map((row) => {
        const record = {};
        header.forEach((col, i) => {
            record[col] = row[i] ?? '';
        });
        return record;
    });
}
function parseCsvRows(content) {
    const rows = [];
    let row = [];
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
//# sourceMappingURL=csv-parser.js.map