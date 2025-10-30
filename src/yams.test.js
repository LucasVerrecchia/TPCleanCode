import { describe, it, expect } from "vitest";
import { calculateBestScore } from "./yams.js";

describe("calculateBestScore without dices", () => {
    it("should return 0 for an empty / undefined array", () => {
        expect(calculateBestScore([])).toBe(0);
    });
});

describe("calculateBestScore Yams (5 of a kind)", () => {
    it("should return 50 for [1, 1, 1, 1, 1]", () => {
        expect(calculateBestScore([1, 1, 1, 1, 1])).toBe(50);
    });
});