export function getMaxOccurrences(dices) {
    const counts = {};
    for (const dice of dices) {
        counts[dice] = (counts[dice] || 0) + 1;
    }
    return Math.max(...Object.values(counts));
}

export function isFull(dices) {
    const counts = {};
    for (const dice of dices) {
        counts[dice] = (counts[dice] || 0) + 1;
    }
    const occurrences = Object.values(counts).sort((a, b) => b - a);
    return occurrences.length === 2 && occurrences[0] === 3 && occurrences[1] === 2;
}

const SCORE_BY_OCCURRENCES = {
    5: 50,  // Yams
    4: 35,  // Carré
};

export function calculateBestScore(dices = [[1, 1, 1, 1, 1], [1, 2, 5, 6, 2], [1, 2, 3, 4, 5]]) {
    if (!dices.length) {
        return 0;
    }

    const maxOccurrences = getMaxOccurrences(dices[0]); // on part du principe que le joueur garde son premier lancer : [1, 1, 1, 1, 1] (voir regles dans readme)

    if (maxOccurrences === 3) {
        if (isFull(dices[0])) {
            return 28;  // Full
        }
        return 20;  // Brelan simple
    }

    if (dices[0][0] !== dices[0][1] && dices[0][1] !== dices[0][2] && dices[0][2] !== dices[0][3] && dices[0][3] !== dices[0][4]) {
        return 40;  // Suite
    }

    return SCORE_BY_OCCURRENCES[maxOccurrences] || 0;
}
