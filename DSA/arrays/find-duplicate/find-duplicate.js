/**
 * Approach 1: Sorting
 * Sort and check consecutive elements.
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) if in-place sort
 */
function findDuplicateSort(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) return nums[i];
    }
    return -1;
}

/**
 * Approach 2: Hash Set
 * Track seen numbers.
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function findDuplicateSet(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) return num;
        seen.add(num);
    }
    return -1;
}

/**
 * Approach 3: Floyd's Cycle Detection (Tortoise & Hare)
 * Treat numbers as linked list indexes.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function findDuplicate(nums) {
    let slow = nums[0];
    let fast = nums[0];

    // Phase 1: Detect cycle
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    // Phase 2: Find entrance of cycle (duplicate)
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
}

module.exports = { findDuplicate, findDuplicateSort, findDuplicateSet };
