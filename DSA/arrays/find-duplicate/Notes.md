# Notes: Find the Duplicate Number

- Key insight: nums[i] points to another index, forming a cycle.
- Floyd’s Algorithm is same as detecting cycle in a linked list.
- Recruiter explanation: "Sorting or HashSet works, but cycle detection gives O(1) extra space."
- Trick: Always clarify constraints (only one duplicate? multiple allowed?).
