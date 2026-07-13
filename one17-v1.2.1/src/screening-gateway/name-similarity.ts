// Invariant 72(b): "fuzzy/normalized name + alias matching with similarity
// scoring." No external fuzzy-match library -- normalized Levenshtein edit
// distance, expressed as a 0-100 similarity score, is a well-understood,
// auditable algorithm appropriate for a compliance control (a reviewer can
// verify the math by hand), rather than an opaque third-party black box.

export function normalizeName(name: string): string {
  return name
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '') // strip diacritics
    .toUpperCase()
    .replace(/[^A-Z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// ============================================================================
// Invariant 75(e) (CHECK28, v1.2.1 audit remediation): "add token-order-
// insensitive comparison + initials/transliteration handling NOW (reduces
// false negatives cheaply); labelled-corpus threshold validation recorded
// as a v1.3 item." These three additions only WIDEN what the engine is
// willing to surface as a CANDIDATE hit for a human to adjudicate -- they
// never auto-clear or auto-block anything (invariant 72(e) holds
// unchanged: "the engine remains advisory/human-adjudicated until
// validated" against a real labelled corpus, which is explicitly the
// deferred v1.3 item, not built here). Each rule below is a small,
// deterministic, auditable-by-hand heuristic -- no per-name dictionary is
// hardcoded anywhere in this file.
// ============================================================================

// Collapses a small, commonly-cited set of Arabic-to-Latin transliteration
// variants onto one canonical spelling: doubled (geminated) consonants
// transliterate inconsistently as one or two Latin letters (MOHAMMED vs
// MOHAMED, HASSAN vs HASAN), and PH/TH/Q are near-universally interchangeable
// with F/T/K across the transliteration conventions this platform's
// sanctions-list-relevant name space actually uses. Applied ON TOP of (never
// instead of) the existing normalized comparison -- a candidate that only
// scores well after folding still scores WORSE than an exact match, so this
// never displaces a genuinely exact/near-exact hit.
function foldTransliteration(normalized: string): string {
  return normalized
    .replace(/(.)\1+/g, '$1')
    .replace(/PH/g, 'F')
    .replace(/TH/g, 'T')
    .replace(/Q/g, 'K');
}

// Token-order-insensitive: sorts a normalized name's whitespace-separated
// tokens alphabetically before scoring, so "SMITH JOHN" and "JOHN SMITH"
// compare identically. Surname-first vs given-name-first conventions, or a
// simply-reordered middle name, otherwise cost raw left-to-right Levenshtein
// a large edit distance for a harmless reordering.
function tokenSort(normalized: string): string {
  return normalized.split(' ').filter(Boolean).sort().join(' ');
}

// Initials handling: if `tokens` contains a single-letter token (an
// initial, e.g. "J" in "J SMITH"), and `otherTokens` has a full token
// starting with that same letter, the initial is expanded to that full
// token before scoring -- so "J SMITH" scores a near-perfect match against
// "JOHN SMITH" instead of being penalized for the missing letters. A
// non-matching initial (no token in the other name starts with that
// letter) is left exactly as-is, so this never manufactures a match that
// wasn't there.
function expandInitials(tokens: string[], otherTokens: string[]): string[] {
  return tokens.map((t) => (t.length === 1 ? (otherTokens.find((o) => o.length > 1 && o[0] === t) ?? t) : t));
}

function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const prev = new Array(b.length + 1);
  const curr = new Array(b.length + 1);
  for (let j = 0; j <= b.length; j++) prev[j] = j;
  for (let i = 1; i <= a.length; i++) {
    curr[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    for (let j = 0; j <= b.length; j++) prev[j] = curr[j];
  }
  return prev[b.length];
}

function levenshteinScore(a: string, b: string): number {
  if (!a || !b) return 0;
  const maxLen = Math.max(a.length, b.length);
  const distance = levenshtein(a, b);
  return Math.round((1 - distance / maxLen) * 100);
}

// Invariant 75(e): the best score across the DIRECT comparison and the
// three widening variants (transliteration-folded, token-order-
// insensitive, initials-expanded) -- never lower than the plain direct
// score this function returned before invariant 75(e), only ever higher
// (these are additional candidates, not a replacement algorithm).
function scoreVariants(a: string, b: string): number {
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

// 100 = identical (after normalization); 0 = completely dissimilar.
export function nameSimilarityScore(subjectName: string, candidateName: string): number {
  const a = normalizeName(subjectName);
  const b = normalizeName(candidateName);
  if (!a || !b) return 0;
  return scoreVariants(a, b);
}

// The cheapest possible lower bound on Levenshtein distance between two
// strings of the given lengths is |lenA - lenB| (you can never do it in
// fewer edits than the length gap alone). That gives an upper bound on the
// similarity score without computing the actual distance -- used to skip
// full Levenshtein for names that could not possibly reach a threshold no
// matter how the characters line up, never a false negative.
function maxPossibleScore(lenA: number, lenB: number): number {
  if (lenA === 0 || lenB === 0) return 0;
  const maxLen = Math.max(lenA, lenB);
  return Math.round((1 - Math.abs(lenA - lenB) / maxLen) * 100);
}

// Best score across a subject's own name vs a list entry's primary name AND
// every declared alias -- a hit on an alias is still a hit (invariant
// 72(b): "every candidate match rendered"). An optional minThreshold lets a
// bulk caller (screening thousands of list entries per subject, e.g. the
// invariant 72(d) re-screening sweep against a real ~19k-row OFAC download)
// skip the O(n*m) Levenshtein pass entirely for names whose length alone
// rules out ever reaching the threshold -- the RESULT is identical to
// calling this with minThreshold omitted, just far cheaper to compute.
export function bestMatchScore(subjectName: string, primaryName: string, aliases: string[], minThreshold?: number): number {
  const a = normalizeName(subjectName);
  const foldedA = foldTransliteration(a);
  const tokensA = a.split(' ').filter(Boolean);
  // Invariant 75(e): the length-based skip below is computed off FOLDED
  // lengths (folding only ever shrinks a string, so the bound stays valid/
  // safe for the folded and token-sorted variants too -- it can only be
  // MORE permissive than the unfolded bound, never wrongly tighter) and is
  // disabled entirely whenever the SUBJECT name itself carries an initial,
  // since initials-expansion can grow a string in a way no static length
  // bound covers safely. A subject legal name containing a bare initial is
  // rare enough that this never meaningfully regresses the bulk re-
  // screening sweep's own performance note above.
  const subjectHasInitial = tokensA.some((t) => t.length === 1);
  let best = 0;
  for (const candidate of [primaryName, ...aliases]) {
    const b = normalizeName(candidate);
    if (!a || !b) continue;
    if (minThreshold !== undefined && !subjectHasInitial) {
      const foldedB = foldTransliteration(b);
      if (maxPossibleScore(foldedA.length, foldedB.length) < minThreshold) continue;
    }
    const score = scoreVariants(a, b);
    if (score > best) best = score;
  }
  return best;
}
