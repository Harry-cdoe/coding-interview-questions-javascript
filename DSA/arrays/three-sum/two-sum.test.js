const { threeSum, threeSumBrute } = require('./three-sum');

/**
 * Helper to check if two arrays of triplets are equal regardless of order
 */
function sortTriplets(arr) {
  return arr
    .map(triplet => triplet.slice().sort((a,b) => a-b))
    .sort((a,b) => a[0]-b[0] || a[1]-b[1] || a[2]-b[2]);
}

describe('Three Sum Problem', () => {
  const testCases = [
    {
      nums: [-1,0,1,2,-1,-4],
      expected: [[-1,-1,2], [-1,0,1]]
    },
    {
      nums: [0,0,0],
      expected: [[0,0,0]]
    },
    {
      nums: [1,2,-2,-1],
      expected: []
    },
    {
      nums: [],
      expected: []
    },
    {
      nums: [0],
      expected: []
    }
  ];

  // Brute Force Tests
  testCases.forEach(({ nums, expected }) => {
    test(`BruteForce: nums=${nums}`, () => {
      expect(sortTriplets(threeSumBrute(nums))).toEqual(sortTriplets(expected));
    });
  });

  // Optimized Two-Pointer Tests
  testCases.forEach(({ nums, expected }) => {
    test(`TwoPointer: nums=${nums}`, () => {
      expect(sortTriplets(threeSum(nums))).toEqual(sortTriplets(expected));
    });
  });
});
