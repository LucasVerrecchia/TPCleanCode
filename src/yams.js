export function getMaxOccurrences(dices) {
    const counts = {};
    for (const dice of dices) {
        counts[dice] = (counts[dice] || 0) + 1;
    }
    return Math.max(...Object.values(counts));
}

export function calculateBestScore(dices = [[1, 1, 1, 1, 1]]) {
    if (!dices.length) {
        return 0;
    }

    const maxOccurrences = getMaxOccurrences(dices[0]);

    if (maxOccurrences === 5) {
        return 50;
    }

    if (maxOccurrences === 4) {
        return 35;
    }

    if (maxOccurrences === 3) {
        return 28;
    }

    return 0;
}

