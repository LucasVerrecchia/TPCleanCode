import { describe, it, expect } from "vitest";
import { calculateBestScore } from "./yams.js";

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