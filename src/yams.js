export function getMaxOccurrences(dices) {
    const counts = {};
    for (const dice of dices) {
        counts[dice] = (counts[dice] || 0) + 1;
    }
    return Math.max(...Object.values(counts));
}

const SCORE_BY_OCCURRENCES = {
    5: 50,  // Yams
    4: 35,  // Carré
    3: 28,  // Brelan
};

export function calculateBestScore(dices = [[1, 1, 1, 1, 1], [1, 2, 5, 6, 2]]) {
    if (!dices.length) {
        return 0;
    }

    const maxOccurrences = getMaxOccurrences(dices[0]);
    return SCORE_BY_OCCURRENCES[maxOccurrences] || 0;
}
