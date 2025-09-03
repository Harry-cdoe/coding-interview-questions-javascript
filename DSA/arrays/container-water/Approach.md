# Container With Most Water (LeetCode 11)

## Approach 1: Brute Force

- Try every pair (i, j).
- Compute area = min(height[i], height[j]) \* (j - i).
- Keep max.
- Time: O(n^2), Space: O(1).

## Approach 2: Two Pointers (Optimized)

- Start with left=0, right=n-1.
- Compute area.
- Move smaller height pointer inward.
- Continue until left < right.
- Time: O(n), Space: O(1).

✅ Interview Tip: The trick is realizing the smaller height limits the container, so moving it might give a larger area.
