"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeName = normalizeName;
exports.nameSimilarityScore = nameSimilarityScore;
exports.bestMatchScore = bestMatchScore;
function normalizeName(name) {
    return name
        .normalize('NFKD')
        .replace(/[̀-ͯ]/g, '')
        .toUpperCase()
        .replace(/[^A-Z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}
function foldTransliteration(normalized) {
    return normalized
        .replace(/(.)\1+/g, '$1')
        .replace(/PH/g, 'F')
        .replace(/TH/g, 'T')
        .replace(/Q/g, 'K');
}
function tokenSort(normalized) {
    return normalized.split(' ').filter(Boolean).sort().join(' ');
}
function expandInitials(tokens, otherTokens) {
    return tokens.map((t) => (t.length === 1 ? (otherTokens.find((o) => o.length > 1 && o[0] === t) ?? t) : t));
}
function levenshtein(a, b) {
    if (a === b)
        return 0;
    if (a.length === 0)
        return b.length;
    if (b.length === 0)
        return a.length;
    const prev = new Array(b.length + 1);
    const curr = new Array(b.length + 1);
    for (let j = 0; j <= b.length; j++)
        prev[j] = j;
    for (let i = 1; i <= a.length; i++) {
        curr[0] = i;
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
        }
        for (let j = 0; j <= b.length; j++)
            prev[j] = curr[j];
    }
    return prev[b.length];
}
function levenshteinScore(a, b) {
    if (!a || !b)
        return 0;
    const maxLen = Math.max(a.length, b.length);
    const distance = levenshtein(a, b);
    return Math.round((1 - distance / maxLen) * 100);
}
function scoreVariants(a, b) {
    const direct = levenshteinScore(a, b);
    const foldedA = foldTransliteration(a);
    const foldedB = foldTransliteration(b);
    const folded = levenshteinScore(foldedA, foldedB);
    const sorted = levenshteinScore(tokenSort(foldedA), tokenSort(foldedB));
    const tokensA = a.split(' ').filter(Boolean);
    const tokensB = b.split(' ').filter(Boolean);
    const expandedA = expandInitials(tokensA, tokensB).join(' ');
    const expandedB = expandInitials(tokensB, tokensA).join(' ');
    const initialsExpanded = levenshteinScore(tokenSort(expandedA), tokenSort(expandedB));
    return Math.max(direct, folded, sorted, initialsExpanded);
}
function nameSimilarityScore(subjectName, candidateName) {
    const a = normalizeName(subjectName);
    const b = normalizeName(candidateName);
    if (!a || !b)
        return 0;
    return scoreVariants(a, b);
}
function maxPossibleScore(lenA, lenB) {
    if (lenA === 0 || lenB === 0)
        return 0;
    const maxLen = Math.max(lenA, lenB);
    return Math.round((1 - Math.abs(lenA - lenB) / maxLen) * 100);
}
function bestMatchScore(subjectName, primaryName, aliases, minThreshold) {
    const a = normalizeName(subjectName);
    const foldedA = foldTransliteration(a);
    const tokensA = a.split(' ').filter(Boolean);
    const subjectHasInitial = tokensA.some((t) => t.length === 1);
    let best = 0;
    for (const candidate of [primaryName, ...aliases]) {
        const b = normalizeName(candidate);
        if (!a || !b)
            continue;
        if (minThreshold !== undefined && !subjectHasInitial) {
            const foldedB = foldTransliteration(b);
            if (maxPossibleScore(foldedA.length, foldedB.length) < minThreshold)
                continue;
        }
        const score = scoreVariants(a, b);
        if (score > best)
            best = score;
    }
    return best;
}
//# sourceMappingURL=name-similarity.js.map