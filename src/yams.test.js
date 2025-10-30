import { describe, it, expect } from "vitest";
import { calculateBestScore } from "./yams.js";

describe("calculateBestScore", () => {
    it("should return 0 for an empty / undefined array", () => {
        expect(calculateBestScore([])).toBe(0);
    });
});

