# 3Sum Problem

## 📌 Problem Statement

Given an integer array `nums`, return all unique triplets `[nums[i], nums[j], nums[k]]` such that:

- `i != j`, `i != k`, and `j != k`
- `nums[i] + nums[j] + nums[k] == 0`

The solution set must not contain duplicate triplets.

---

## 🧾 Example

**Input:**
nums = [-1, 0, 1, 2, -1, -4]

**Output:**

[[-1, -1, 2], [-1, 0, 1]]

---

## 📂 Project File Structure

| File Name           | Description                                                           |
| ------------------- | --------------------------------------------------------------------- |
| `three-sum.js`      | Contains both **Brute Force** and **Optimized Two-Pointer** solutions |
| `three-sum.test.js` | Jest test cases for validating both solutions with multiple inputs    |
| `Approach.md`       | Step-by-step breakdown: Brute → Optimized → Edge cases → Tradeoffs    |
| `Patterns.md`       | Tagged patterns: **Two Pointer, Sorting, Hashing, Array**             |
| `Notes.md`          | Quick personal notes, interview tips, and example dry runs            |

---

## 🚀 Approaches

### 🔹 Approach 1: Brute Force

- **Idea:** Try every possible triplet using three nested loops.
- **Steps:**
  1. Iterate over all combinations `(i, j, k)`.
  2. Check if `nums[i] + nums[j] + nums[k] == 0`.
  3. Store unique triplets (avoid duplicates).
- **Time Complexity:** `O(n^3)`
- **Space Complexity:** `O(1)` (ignoring result storage)

---

### 🔹 Approach 2: Two-Pointer (Optimized)

- **Idea:** Fix one element and use two pointers for the remaining two.
- **Steps:**
  1. Sort the array.
  2. Loop through `nums[i]`, skipping duplicates.
  3. Use two pointers (`left`, `right`) to find pairs where `nums[i] + nums[left] + nums[right] == 0`.
  4. Skip duplicates while moving pointers.
- **Time Complexity:** `O(n^2)`
- **Space Complexity:** `O(1)` (ignoring result storage)

---

## 🧪 Running Tests

Run the test cases with:

```bash
npm test three-sum.test.js

Sample Test Cases Covered:

testCases = [
  { nums: [-1,0,1,2,-1,-4], expected: [[-1,-1,2], [-1,0,1]] },
  { nums: [0,1,1], expected: [] },
  { nums: [0,0,0], expected: [[0,0,0]] }
]
