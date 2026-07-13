import { ParsedListResult } from './screening-gateway.types';
export declare function parseOfacSdnCsv(raw: string, listVersion: string): ParsedListResult;
export declare function parseUnConsolidatedXml(raw: string, listVersion: string): ParsedListResult;
export declare function parseUkSanctionsCsv(raw: string, listVersion: string): ParsedListResult;
export declare function parseEuFsfXml(raw: string, listVersion: string): ParsedListResult;
