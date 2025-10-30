export function calculateBestScore(dices = [[1, 1, 1, 1, 1], [1, 2, 3, 5, 6]]) {

    if (!dices.length) {
        return 0;
    }

    if (dices[0][0] === dices[0][1] && dices[0][1] === dices[0][2] && dices[0][2] === dices[0][3] && dices[0][3] === dices[0][4]) {
        return 50;
    }

    if (dices[0][0] === dices[0][1] && dices[0][1] === dices[0][2] && dices[0][2] === dices[0][3]
        || dices[0][0] === dices[0][1] && dices[0][1] === dices[0][2] && dices[0][2] === dices[0][4]
        || dices[0][0] === dices[0][1] && dices[0][1] === dices[0][3] && dices[0][3] === dices[0][4]
        || dices[0][0] === dices[0][2] && dices[0][2] === dices[0][3] && dices[0][3] === dices[0][4]
        || dices[0][1] === dices[0][2] && dices[0][2] === dices[0][3] && dices[0][3] === dices[0][4]
    ) {
        return 35;
    }

    if (dices[0][0] === dices[0][1] && dices[0][1] === dices[0][2]
        || dices[0][0] === dices[0][1] && dices[0][1] === dices[0][3]
        || dices[0][0] === dices[0][1] && dices[0][1] === dices[0][4]
        || dices[0][0] === dices[0][2] && dices[0][2] === dices[0][3]
        || dices[0][0] === dices[0][2] && dices[0][2] === dices[0][4]
        || dices[0][0] === dices[0][3] && dices[0][3] === dices[0][4]) {
        return 28;
    }
}

