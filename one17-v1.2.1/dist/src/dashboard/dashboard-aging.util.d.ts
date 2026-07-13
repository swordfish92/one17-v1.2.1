export interface AgingBucketRow {
    bucket: '0-30' | '31-60' | '61-90' | '90+';
    amountKobo: string;
    count: number;
}
export declare function bucketByAge(items: {
    ageDays: number;
    amountKobo: bigint;
}[]): AgingBucketRow[];
export declare function daysBetween(from: Date, to: Date): number;
