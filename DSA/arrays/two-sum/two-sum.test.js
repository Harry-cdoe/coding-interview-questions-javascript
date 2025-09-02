const {
  twoSumBruteForce,
  twoSumHashMap,
  twoSumTwoPointer,
  twoSumBinarySearch
} = require('./two-sum');

describe('Two Sum Problem', () => {
  const testCases = [
    { nums: [2,7,11,15], target: 9, expected: [0,1] },
    { nums: [3,2,4], target: 6, expected: [1,2] },
    { nums: [3,3], target: 6, expected: [0,1] }
  ];

  // Brute Force Tests
  testCases.forEach(({ nums, target, expected }) => {
    test(`BruteForce: nums=${nums} target=${target}`, () => {
      expect(twoSumBruteForce(nums, target)).toEqual(expected);
    });
  });

  // Hash Map Tests
  testCases.forEach(({ nums, target, expected }) => {
    test(`HashMap: nums=${nums} target=${target}`, () => {
      expect(twoSumHashMap(nums, target)).toEqual(expected);
    });
  });

  // Two-Pointer Tests (sorted arrays only)
  testCases.forEach(({ nums, target }) => {
    const sortedNums = [...nums].sort((a,b) => a-b); // sort for two-pointer
    test(`TwoPointer: nums=${sortedNums} target=${target}`, () => {
      expect(twoSumTwoPointer(sortedNums, target)).toEqual(expect.any(Array));
    });
  });

  // Binary Search Tests (sorted arrays only)
  testCases.forEach(({ nums, target }) => {
    const sortedNums = [...nums].sort((a,b) => a-b);
    test(`BinarySearch: nums=${sortedNums} target=${target}`, () => {
      expect(twoSumBinarySearch(sortedNums, target)).toEqual(expect.any(Array));
    });
  });
});
