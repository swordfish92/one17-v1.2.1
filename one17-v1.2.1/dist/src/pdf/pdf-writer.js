"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfWriter = void 0;
exports.fmtDate = fmtDate;
exports.kobo = kobo;
const fs_1 = require("fs");
const path_1 = require("path");
const pdf_lib_1 = require("pdf-lib");
const LOGO_PNG_BYTES = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '..', 'statement', 'assets', 'one17-logo.png'));
function fmtDate(d) {
    return d.toISOString().slice(0, 10);
}
function kobo(v) {
    return `NGN ${(Number(v) / 100).toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
}
class PdfWriter {
    doc;
    page;
    font;
    bold;
    logoImage;
    y = 0;
    margin = 48;
    pageWidth = 595;
    pageHeight = 842;
    constructor(doc) {
        this.doc = doc;
    }
    async init() {
        this.font = await this.doc.embedFont(pdf_lib_1.StandardFonts.Helvetica);
        this.bold = await this.doc.embedFont(pdf_lib_1.StandardFonts.HelveticaBold);
        this.logoImage = await this.doc.embedPng(LOGO_PNG_BYTES);
        this.newPage();
    }
    logo() {
        const width = 90;
        const height = width * (this.logoImage.height / this.logoImage.width);
        this.page.drawImage(this.logoImage, { x: this.margin, y: this.y - height, width, height });
        this.y -= height + 10;
    }
    letterheadHeader(template, titleSuffix) {
        this.logo();
        if (!template) {
            this.title(`One17 Capital Limited — ${titleSuffix}`);
            return;
        }
        this.line(template.companyName, { size: 13, font: this.bold, color: (0, pdf_lib_1.rgb)(0.05, 0.05, 0.05) });
        this.line(template.addressLine1 + (template.addressLine2 ? `, ${template.addressLine2}` : ''), { size: 8, color: (0, pdf_lib_1.rgb)(0.4, 0.4, 0.4) });
        this.line(`${template.rcNumber} | ${template.secRegistrationLine}`, { size: 8, color: (0, pdf_lib_1.rgb)(0.4, 0.4, 0.4) });
        this.gap();
        this.title(titleSuffix);
    }
    newPage() {
        this.page = this.doc.addPage([this.pageWidth, this.pageHeight]);
        this.y = this.pageHeight - this.margin;
    }
    ensureSpace(lines = 1) {
        if (this.y - lines * 14 < this.margin)
            this.newPage();
    }
    line(text, opts = {}) {
        this.ensureSpace();
        this.page.drawText(text, { x: this.margin, y: this.y, size: opts.size ?? 10, font: opts.font ?? this.font, color: opts.color ?? (0, pdf_lib_1.rgb)(0.15, 0.15, 0.16) });
        this.y -= (opts.size ?? 10) + 4;
    }
    title(text) {
        this.line(text, { size: 16, font: this.bold, color: (0, pdf_lib_1.rgb)(0.05, 0.05, 0.05) });
    }
    subtitle(text) {
        this.line(text, { size: 12, font: this.bold, color: (0, pdf_lib_1.rgb)(0.42, 0.63, 0.19) });
        this.y -= 4;
    }
    heading(text) {
        this.gap();
        this.line(text, { size: 11, font: this.bold });
    }
    kv(label, value) {
        this.line(`${label}: ${value}`, { size: 10 });
    }
    centeredLine(text, opts = {}) {
        this.ensureSpace();
        const size = opts.size ?? 14;
        const font = opts.font ?? this.bold;
        const width = font.widthOfTextAtSize(text, size);
        this.page.drawText(text, { x: (this.pageWidth - width) / 2, y: this.y, size, font, color: opts.color ?? (0, pdf_lib_1.rgb)(0.05, 0.05, 0.05) });
        this.y -= size + 6;
    }
    gap() {
        this.y -= 6;
    }
    wrappedText(text, opts = {}) {
        const size = opts.size ?? 10;
        const font = this.font;
        const words = text.split(' ');
        let lineText = '';
        for (const word of words) {
            const candidate = lineText ? `${lineText} ${word}` : word;
            if (font.widthOfTextAtSize(candidate, size) > this.pageWidth - this.margin * 2) {
                this.line(lineText, { size, color: opts.color });
                lineText = word;
            }
            else {
                lineText = candidate;
            }
        }
        if (lineText)
            this.line(lineText, { size, color: opts.color });
    }
    footer(text) {
        this.gap();
        this.wrappedText(text, { size: 8, color: (0, pdf_lib_1.rgb)(0.4, 0.4, 0.4) });
    }
    paragraph(text) {
        const paragraphs = text.split(/\n\s*\n/);
        paragraphs.forEach((p, i) => {
            this.wrappedText(p.replace(/\s+/g, ' ').trim(), { size: 10 });
            if (i < paragraphs.length - 1)
                this.gap();
        });
    }
    table(columns, rows) {
        if (rows.length === 0) {
            this.line('No activity in this period.', { size: 9, color: (0, pdf_lib_1.rgb)(0.45, 0.45, 0.45) });
            return;
        }
        const colWidth = (this.pageWidth - this.margin * 2) / columns.length;
        this.ensureSpace(2);
        columns.forEach((c, i) => this.page.drawText(c, { x: this.margin + i * colWidth, y: this.y, size: 8, font: this.bold, color: (0, pdf_lib_1.rgb)(0.3, 0.3, 0.3) }));
        this.y -= 12;
        for (const row of rows) {
            this.ensureSpace(1);
            row.forEach((cell, i) => this.page.drawText(cell, { x: this.margin + i * colWidth, y: this.y, size: 8, font: this.font, color: (0, pdf_lib_1.rgb)(0.15, 0.15, 0.16) }));
            this.y -= 12;
        }
    }
    async save() {
        return this.doc.save();
    }
}
exports.PdfWriter = PdfWriter;
//# sourceMappingURL=pdf-writer.js.map