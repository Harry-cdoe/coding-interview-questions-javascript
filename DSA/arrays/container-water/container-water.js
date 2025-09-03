/**
 * Approach 1: Brute Force
 * Try every pair of lines and calculate area.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function maxAreaBrute(height) {
    let maxArea = 0;
    const n = height.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const area = Math.min(height[i], height[j]) * (j - i);
            maxArea = Math.max(maxArea, area);
        }
    }

    return maxArea;
}

/**
 * Approach 2: Two Pointers (Optimized)
 * Start from both ends, move the smaller height pointer inward.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

module.exports = { maxArea, maxAreaBrute };
