import { describe, it, expect } from "vitest";
import { calculateBestScore, getMaxOccurrences, isFull } from "./yams.js";

// Tests pour la fonction getMaxOccurences (pas sur que ca soit utile mais si j'ai bien compris TDD = overkill :p)

describe("getMaxOccurrences helper function", () => {
    it("should return 5 for [1, 1, 1, 1, 1]", () => {
        expect(getMaxOccurrences([1, 1, 1, 1, 1])).toBe(5);
    });

    it("should return 4 for [2, 2, 2, 2, 3]", () => {
        expect(getMaxOccurrences([2, 2, 2, 2, 3])).toBe(4);
    });

    it("should return 3 for [2, 2, 2, 3, 4]", () => {
        expect(getMaxOccurrences([2, 2, 2, 3, 4])).toBe(3);
    });
});

// Tests pour la fonction isFull 

describe("isFull helper function", () => {
    it("should return true for [2, 2, 2, 3, 3]", () => {
        expect(isFull([2, 2, 2, 3, 3])).toBe(true);
    });

    it("should return true for [2, 2, 3, 3, 2]", () => {
        expect(isFull([2, 2, 3, 3, 2])).toBe(true);
    });

    it("should return false for [2, 2, 2, 3, 4]", () => {
        expect(isFull([2, 2, 2, 3, 4])).toBe(false);
    });

    it("should return false for [1, 1, 1, 1, 1]", () => {
        expect(isFull([1, 1, 1, 1, 1])).toBe(false);
    });
});

// Tests pour le main (calulateBestScore) - tests ASSERT TRUE

describe("calculateBestScore without dices", () => {
    it("should return 0 for an empty / undefined array", () => {
        expect(calculateBestScore([])).toBe(0);
    });
});

describe("calculateBestScore Yams (5 of a kind)", () => {
    it("should return 50 for [1, 1, 1, 1, 1]", () => {
        expect(calculateBestScore([[1, 1, 1, 1, 1], [1, 2, 3, 5, 6]])).toBe(50);
    });
});

describe("calculateBestScore Carré (4 of a kind) with the 4 first same dices", () => {
    it("should return sum of all dices for [2, 2, 2, 2, 3]", () => {
        expect(calculateBestScore([[2, 2, 2, 2, 3], [1, 2, 3, 5, 6]])).toBe(35);
    });
});

describe("calculateBestScore Carré (4 of a kind) with the last 4 same dices", () => {
    it("should return sum of all dices for [2, 2, 2, 2, 3]", () => {
        expect(calculateBestScore([[3, 2, 2, 2, 2], [1, 2, 3, 5, 6]])).toBe(35);
    });
});

describe("calculateBestScore Carré (4 of a kind) with 4 random dices", () => {
    it("should return sum of all dices for [2, 2, 2, 2, 3]", () => {
        expect(calculateBestScore([[2, 2, 3, 2, 2], [1, 2, 3, 5, 6]])).toBe(35);
    });
});

describe("calculateBestScore Full (3 of a kind + 2 of a kind) with the 3 first same dices", () => {
    it("should return 28 for [2, 2, 2, 3, 3]", () => {
        expect(calculateBestScore([[2, 2, 2, 3, 3], [1, 2, 3, 5, 6]])).toBe(28);
    });
});

describe("calculateBestScore Full (3 of a kind + 2 of a kind) with 3 random same dices", () => {
    it("should return 28 for [2, 2, 3, 3, 2]", () => {
        expect(calculateBestScore([[2, 2, 3, 3, 2], [1, 2, 3, 5, 6]])).toBe(28);
    });
});

describe("calculateBestScore Brelan (3 of a kind only, no pair)", () => {
    it("should return 20 for [2, 2, 2, 3, 4]", () => {
        expect(calculateBestScore([[2, 2, 2, 3, 4], [1, 2, 3, 5, 6]])).toBe(20);
    });
});

describe("calculateBestScore for Suite (1-2-3-4-5)", () => {
    it("should return 0 for [1, 2, 3, 4, 5]", () => {
        expect(calculateBestScore([[1, 2, 3, 4, 5], [1, 2, 3, 5, 6]])).toBe(40);
    });
});

// tests ASSERT FALSE

describe("calculateBestScore Yams without 5 same dices", () => {
    it("should not return 50 for [1, 1, 1, 1, 2]", () => {
        expect(calculateBestScore([[1, 1, 1, 1, 2], [1, 2, 3, 5, 6]])).not.toBe(50);
    });
});

describe("calculateBestScore Carré without 4 same dices", () => {
    it("should not return 35 for [1, 1, 1, 2, 3]", () => {
        expect(calculateBestScore([[1, 1, 1, 2, 3], [1, 2, 3, 5, 6]])).not.toBe(35);
    });
});

describe("calculateBestScore Full without 3 of a kind and 2 of a kind", () => {
    it("should not return 28 for [1, 1, 2, 2, 3]", () => {
        expect(calculateBestScore([[1, 1, 2, 2, 3], [1, 2, 3, 5, 6]])).not.toBe(28);
    });
});