const { findDuplicate, findDuplicateSort, findDuplicateSet } = require('./find-duplicate');

describe('Find the Duplicate Number', () => {
    const testCases = [
        { nums: [1, 3, 4, 2, 2], expected: 2 },
        { nums: [3, 1, 3, 4, 2], expected: 3 },
        { nums: [1, 1], expected: 1 },
        { nums: [1, 1, 2], expected: 1 },
    ];

    // Sort-based
    testCases.forEach(({ nums, expected }) => {
        test(`Sort: nums=${nums}`, () => {
            expect(findDuplicateSort([...nums])).toBe(expected);
        });
    });

    // Set-based
    testCases.forEach(({ nums, expected }) => {
        test(`Set: nums=${nums}`, () => {
            expect(findDuplicateSet(nums)).toBe(expected);
        });
    });

    // Floyd's Tortoise & Hare
    testCases.forEach(({ nums, expected }) => {
        test(`Floyd Cycle: nums=${nums}`, () => {
            expect(findDuplicate(nums)).toBe(expected);
        });
    });
});
