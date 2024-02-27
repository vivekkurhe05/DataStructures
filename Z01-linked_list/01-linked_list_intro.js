/**
 * Different between arrays and linked list
 * - Arrays have indexes and linked lists have head and tail. Head points to the first node, and Tail points to the last node.
 * Each node points to the next node, and last node in linked list points to the null. 
 *
 */

/**
 * Big O of Linked lists
 * 
 * Adding item to the last in linked list takes - O(1)
 * 
 * Removing last item from the linked list takes - O(n) because We have to iterate through the entire list to make tail point to the last item.
 * We can't go backwards in the linked list directly.
 * 
 * Adding item to the beginning of linked list takes - O(1)
 * 
 * Removing item from the beginning of linked list takes - O(1)
 * 
 * Inserting item in the middle of the linked list takes - O(n) because we have to iterate from the head
 * 
 * Removing item from the middle of the linked list takes - O(n) because we have to iterate from the head
 * 
 * Finding an item by value takes - O(n) because we have to iterate from the head
 * 
 * Finding an item by index takes - O(n) because we have to iterate from the head
 * 
 */

/**
 * In linked list, Node is nothing but an object. Object contains two properties value and next. The node is made up of value and the pointer. The node is actually an object that looks something like this
 * {
 *  value: 4,
 *  next: null
 * }
 */