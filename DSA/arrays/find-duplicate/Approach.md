# Find the Duplicate Number (LeetCode 287)

## Approach 1: Sorting

- Sort array, check consecutive elements.
- Time: O(n log n), Space: O(1).

## Approach 2: Hash Set

- Keep track of seen numbers.
- Time: O(n), Space: O(n).

## Approach 3: Floyd’s Cycle Detection (Tortoise & Hare)

- Treat values as pointers (like linked list).
- Detect cycle using fast & slow pointers.
- Duplicate = cycle entrance.
- Time: O(n), Space: O(1).

✅ Interview Tip: Cycle detection approach is most **optimized & expected**.
