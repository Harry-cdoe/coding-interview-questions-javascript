# Two Sum Problem - LeetCode #1

## Problem Statement
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.  

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.  

---

## Approaches

### 1. Brute Force
- Check all possible pairs.
- **Time Complexity:** O(n²)  
- **Space Complexity:** O(1)  
- **Use When:** Array is small, simple and direct approach.

### 2. Hash Map
- Store seen elements in a hash map for O(1) lookup.
- **Time Complexity:** O(n)  
- **Space Complexity:** O(n)  
- **Use When:** Array size is large; want efficient lookup.

### 3. Two-Pointer (Sorted Array)
- Use two pointers from start and end.
- **Time Complexity:** O(n)  
- **Space Complexity:** O(1)  
- **Use When:** Array is sorted or can sort; fast in-place solution.

### 4. Binary Search (Sorted Array)
- Iterate each element and search for the complement using binary search.
- **Time Complexity:** O(n log n)  
- **Space Complexity:** O(1)  
- **Use When:** Array is sorted; want to avoid extra space.

---

## Pattern Recognition
- **Array sorted:** Two-pointer / Binary search  
- **Array unsorted:** Hash map  
- **Small array:** Brute force  
- **Focus on space optimization:** Two-pointer preferred  

---

## Notes
- Always check if array is sorted before using two-pointer or binary search.  
- For interviews, **Hash Map** approach is usually expected for O(n) solution.
