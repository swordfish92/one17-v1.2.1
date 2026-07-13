import { readFileSync } from 'fs';
import { join } from 'path';
import { PDFDocument, PDFFont, PDFImage, PDFPage, StandardFonts, rgb } from 'pdf-lib';
import { ActiveLetterheadContent } from '../letterhead/letterhead.types';

// Invariant 46(e): the official company logo, raster (pdf-lib has no SVG
// embed — this is the one genuinely-required raster fallback, not a
// shortcut). Read once at module load, not per-request. Path deliberately
// points at statement/assets/, NOT a local pdf/assets/ dir -- nest-cli.json's
// "assets" glob only copies "statement/assets/**/*" to dist/, and __dirname
// resolves to src/pdf/ in ts-node dev / dist/src/pdf/ in the compiled
// build, both one level away from that existing copied location. Moving
// the asset would require also touching nest-cli.json's build config for
// no behavioural gain.
const LOGO_PNG_BYTES = readFileSync(join(__dirname, '..', 'statement', 'assets', 'one17-logo.png'));

export function fmtDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}
// WinAnsi (StandardFonts.Helvetica) cannot encode U+20A6 (Naira sign) --
// "NGN " prefix rather than the symbol, same reason the rest of the
// codebase's PDF output (regulatory-reporting.service.ts) never uses it.
export function kobo(v: bigint): string {
  return `NGN ${(Number(v) / 100).toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
}

// Minimal cursor-based PDF text/table writer -- pdf-lib has no layout
// helpers of its own (confirmed: every existing use in this codebase is
// PDFDocument.load() against a pre-made template + coordinate overlay, see
// regulatory-reporting.service.ts; nothing builds a page from scratch).
// Hand-rolled here rather than adding a new dependency. Originally lived
// only in statement.service.ts (invariant 44d); extracted for invariant
// 52(b)'s certificate renderer (and 52(c)'s letter renderer) to reuse the
// same governed-letterhead-header primitive rather than duplicate it.
export class PdfWriter {
  private page!: PDFPage;
  private font!: PDFFont;
  private bold!: PDFFont;
  private logoImage!: PDFImage;
  private y = 0;
  private readonly margin = 48;
  private readonly pageWidth = 595;
  private readonly pageHeight = 842;

  constructor(private readonly doc: PDFDocument) {}

  async init() {
    this.font = await this.doc.embedFont(StandardFonts.Helvetica);
    this.bold = await this.doc.embedFont(StandardFonts.HelveticaBold);
    this.logoImage = await this.doc.embedPng(LOGO_PNG_BYTES);
    this.newPage();
  }

  // Invariant 46(e): drawn once at the top of the FIRST page only — a
  // letterhead mark, not a per-page watermark; every subsequent page (via
  // ensureSpace()'s newPage()) starts straight into content.
  logo() {
    const width = 90;
    const height = width * (this.logoImage.height / this.logoImage.width);
    this.page.drawImage(this.logoImage, { x: this.margin, y: this.y - height, width, height });
    this.y -= height + 10;
  }

  // Invariant 52(a) (CHECK12): governed letterhead applied to every
  // client-facing PDF. Graceful fallback to the bare logo + hardcoded
  // title when no version has ever reached ACTIVE, so a missing template
  // can never block document generation.
  letterheadHeader(template: ActiveLetterheadContent | null, titleSuffix: string) {
    this.logo();
    if (!template) {
      this.title(`One17 Capital Limited — ${titleSuffix}`);
      return;
    }
    this.line(template.companyName, { size: 13, font: this.bold, color: rgb(0.05, 0.05, 0.05) });
    this.line(template.addressLine1 + (template.addressLine2 ? `, ${template.addressLine2}` : ''), { size: 8, color: rgb(0.4, 0.4, 0.4) });
    this.line(`${template.rcNumber} | ${template.secRegistrationLine}`, { size: 8, color: rgb(0.4, 0.4, 0.4) });
    this.gap();
    this.title(titleSuffix);
  }

  private newPage() {
    this.page = this.doc.addPage([this.pageWidth, this.pageHeight]);
    this.y = this.pageHeight - this.margin;
  }

  private ensureSpace(lines = 1) {
    if (this.y - lines * 14 < this.margin) this.newPage();
  }

  private line(text: string, opts: { size?: number; font?: PDFFont; color?: ReturnType<typeof rgb> } = {}) {
    this.ensureSpace();
    this.page.drawText(text, { x: this.margin, y: this.y, size: opts.size ?? 10, font: opts.font ?? this.font, color: opts.color ?? rgb(0.15, 0.15, 0.16) });
    this.y -= (opts.size ?? 10) + 4;
  }

  title(text: string) {
    this.line(text, { size: 16, font: this.bold, color: rgb(0.05, 0.05, 0.05) });
  }
  subtitle(text: string) {
    this.line(text, { size: 12, font: this.bold, color: rgb(0.42, 0.63, 0.19) });
    this.y -= 4;
  }
  heading(text: string) {
    this.gap();
    this.line(text, { size: 11, font: this.bold });
  }
  kv(label: string, value: string) {
    this.line(`${label}: ${value}`, { size: 10 });
  }
  // A larger, centered banner line -- certificates need a prominent
  // certificate-number/title treatment statements never did.
  centeredLine(text: string, opts: { size?: number; font?: PDFFont; color?: ReturnType<typeof rgb> } = {}) {
    this.ensureSpace();
    const size = opts.size ?? 14;
    const font = opts.font ?? this.bold;
    const width = font.widthOfTextAtSize(text, size);
    this.page.drawText(text, { x: (this.pageWidth - width) / 2, y: this.y, size, font, color: opts.color ?? rgb(0.05, 0.05, 0.05) });
    this.y -= size + 6;
  }
  gap() {
    this.y -= 6;
  }
  // Word-wraps `text` at the page's usable width and draws it line by line
  // -- shared by footer() (small gray disclaimer text) and paragraph()
  // (normal-size letter body text, invariant 52c).
  private wrappedText(text: string, opts: { size?: number; color?: ReturnType<typeof rgb> } = {}) {
    const size = opts.size ?? 10;
    const font = this.font;
    const words = text.split(' ');
    let lineText = '';
    for (const word of words) {
      const candidate = lineText ? `${lineText} ${word}` : word;
      if (font.widthOfTextAtSize(candidate, size) > this.pageWidth - this.margin * 2) {
        this.line(lineText, { size, color: opts.color });
        lineText = word;
      } else {
        lineText = candidate;
      }
    }
    if (lineText) this.line(lineText, { size, color: opts.color });
  }
  footer(text: string) {
    this.gap();
    this.wrappedText(text, { size: 8, color: rgb(0.4, 0.4, 0.4) });
  }
  // Invariant 52(c): letter body text -- paragraphs separated by blank
  // lines in the source (double newline), each word-wrapped at normal
  // body size/color, unlike footer()'s small gray disclaimer styling.
  paragraph(text: string) {
    const paragraphs = text.split(/\n\s*\n/);
    paragraphs.forEach((p, i) => {
      this.wrappedText(p.replace(/\s+/g, ' ').trim(), { size: 10 });
      if (i < paragraphs.length - 1) this.gap();
    });
  }
  table(columns: string[], rows: string[][]) {
    if (rows.length === 0) {
      this.line('No activity in this period.', { size: 9, color: rgb(0.45, 0.45, 0.45) });
      return;
    }
    const colWidth = (this.pageWidth - this.margin * 2) / columns.length;
    this.ensureSpace(2);
    columns.forEach((c, i) => this.page.drawText(c, { x: this.margin + i * colWidth, y: this.y, size: 8, font: this.bold, color: rgb(0.3, 0.3, 0.3) }));
    this.y -= 12;
    for (const row of rows) {
      this.ensureSpace(1);
      row.forEach((cell, i) => this.page.drawText(cell, { x: this.margin + i * colWidth, y: this.y, size: 8, font: this.font, color: rgb(0.15, 0.15, 0.16) }));
      this.y -= 12;
    }
  }
  async save(): Promise<Uint8Array> {
    return this.doc.save();
  }
}
