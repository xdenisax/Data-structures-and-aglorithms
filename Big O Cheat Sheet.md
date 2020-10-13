# Big O Cheat Sheet

### Types
1. **O(1)** 
Constant - *no loops*
2. **O(log N)** 
Logarithmic - usually searching algorithms have log n if they are sorted (Binary Search)
3. **O(n)**
Linear - for loops, while loops through n items
4. **O(n log(n))**  
Log Liniear - usually sorting operations
5. **O(n^2)** 
Quadratic - every element in a collection needs to be compared to ever other element. Two nested loops
6. **O(2^n)** 
Exponential - recursive algorithms that solves a problem of size N
7. **O(n!)** 
Factorial - you are adding a loop for every element

*Important*: 
**Iterating through half a collection is still O(n)
Two separate collections: O(a * b)**

### Causes of time consumption:
- **Operations** (+, -, *, /)
- **Comparisons** (<, >, ==)
- **Looping** (for, while)
- **Outside Function call** (function())

### Rules 
1. Always worst Case
2. Remove Constants
3. Different inputs should have different variables. O(a+b). 
- nested loops => *
- same identation level loops => +
4. Drop Non-dominant terms

### Space consumption
- Variables
- Data Structures
- Function Call
- Allocations
