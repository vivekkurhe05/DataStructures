/**
 * Arrays are an ordered list of elements
 * 
 * When to use Arrays?
 * 1. When you need order
 * 2. But when you need fast access / insertion and removal (sort of...), then
 * Insertion - it depends. Insertion at the end takes O(1), and insertion at the beginning takes O(n) because we have to reindex every element in the array
 * Removal - it depends. Removal at the end takes O(1), and Removal at the beginning takes O(n) because we have to reindex every element in the array
 * Searching - O(n) as the array size grows, the searching time grows. If search by value, it's O(n). If search by index, it's O(1)
 * Access - O(1)
 */

/**
 * Big O of Array Operations
 * 1. push - O(1)
 * 2. pop - O(1)
 * 3. shift - O(n)
 * 4. unshift - O(n)
 * 5. concat - O(n)
 * 6. slice - O(n)
 * 7. splice - O(n)
 * 8. sort - O(nlogn)
 * 9. forEach/map/filter/reduce/etc - O(n)
 */