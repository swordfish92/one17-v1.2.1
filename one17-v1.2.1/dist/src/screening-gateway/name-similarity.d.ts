export declare function normalizeName(name: string): string;
export declare function nameSimilarityScore(subjectName: string, candidateName: string): number;
export declare function bestMatchScore(subjectName: string, primaryName: string, aliases: string[], minThreshold?: number): number;
