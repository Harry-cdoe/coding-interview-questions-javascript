/**
 * Two Sum Problem - Multiple Approaches
 * Author: Harry Dev
 */

/**
 * 1. Brute Force Approach
 * Check every pair to find the sum.
 * Time: O(n^2), Space: O(1)
 */
function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
}

/**
 * 2. Hash Map Approach
 * Store elements in a map for O(1) lookup.
 * Time: O(n), Space: O(n)
 */
function twoSumHashMap(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return [];
}

/**
 * 3. Two-Pointer Approach (Array must be sorted)
 * Use two pointers from start & end.
 * Time: O(n), Space: O(1)
 */
function twoSumTwoPointer(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return [];
}

/**
 * 4. Binary Search Approach (Array must be sorted)
 * Iterate each element & binary search for complement.
 * Time: O(n log n), Space: O(1)
 */
function twoSumBinarySearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    const complement = target - nums[i];

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === complement) return [i, mid];
      else if (nums[mid] < complement) left = mid + 1;
      else right = mid - 1;
    }
  }
  return [];
}

// Export all approaches
module.exports = {
  twoSumBruteForce,
  twoSumHashMap,
  twoSumTwoPointer,
  twoSumBinarySearch
};
