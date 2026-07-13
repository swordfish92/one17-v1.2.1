import { PDFDocument, PDFFont, rgb } from 'pdf-lib';
import { ActiveLetterheadContent } from '../letterhead/letterhead.types';
export declare function fmtDate(d: Date): string;
export declare function kobo(v: bigint): string;
export declare class PdfWriter {
    private readonly doc;
    private page;
    private font;
    private bold;
    private logoImage;
    private y;
    private readonly margin;
    private readonly pageWidth;
    private readonly pageHeight;
    constructor(doc: PDFDocument);
    init(): Promise<void>;
    logo(): void;
    letterheadHeader(template: ActiveLetterheadContent | null, titleSuffix: string): void;
    private newPage;
    private ensureSpace;
    private line;
    title(text: string): void;
    subtitle(text: string): void;
    heading(text: string): void;
    kv(label: string, value: string): void;
    centeredLine(text: string, opts?: {
        size?: number;
        font?: PDFFont;
        color?: ReturnType<typeof rgb>;
    }): void;
    gap(): void;
    private wrappedText;
    footer(text: string): void;
    paragraph(text: string): void;
    table(columns: string[], rows: string[][]): void;
    save(): Promise<Uint8Array>;
}
