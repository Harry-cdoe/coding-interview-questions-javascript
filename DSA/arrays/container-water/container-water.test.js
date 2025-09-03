const { maxArea, maxAreaBrute } = require("./container-water");

describe('Container With Most Water', () => {
    const testCases = [
        { height: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
        { height: [1, 1], expected: 1 },
        { height: [4, 3, 2, 1, 4], expected: 16 },
        { height: [1, 2, 1], expected: 2 },
    ];

    // Brute Force
    testCases.forEach(({ height, expected }) => {
        test(`BruteForce: height=${height}`, () => {
            expect(maxAreaBrute(height)).toBe(expected);
        });
    });

    // Optimized Two Pointer
    testCases.forEach(({ height, expected }) => {
        test(`TwoPointer: height=${height}`, () => {
            expect(maxArea(height)).toBe(expected);
        });
    });
});