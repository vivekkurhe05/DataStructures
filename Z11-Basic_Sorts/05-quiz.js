/**
 * Bubble, selection, and insertion sort algorithms have a loop within a loop so they are O(n^2)
 * 
 * Bubble, selection, and insertion sort sort the array in place. That means that they do not create additional copies of the
 * array. That means it's space complexity is O(1)
 * 
 * Bubble, selection, and insertion sort are all O(n) - False
 * Only insertion sort is O(n) when you start with sorted (or almost sorted) data.
 *
 */

/**
 * Insertion sort always starts with a second item and we compare to the item before. If it is less than the item
 * that is before it, we switch them.
 */