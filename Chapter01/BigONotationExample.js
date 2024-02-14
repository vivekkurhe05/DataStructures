

/**
 * The problem with time
 * 
 * 1. Different machines will record different times depending on the specification (CPU)
 * 2. The same machine will record different times.
 * 3. For fast algorithms, speed measurements may not be precise enough?
 */


/**
 * Introducing Big O
 * 
 * Big O Notation is a way to formalize fuzzy counting
 * 
 * It allows us to talk formally about how the runtime of an algorithm
 * grows as the inputs grow
 */

/**
 * Big O Shorthands
 * 
 * 1. Arithmetic operations are constant
 * 2. Variable assignment is constant
 * 3. Accessing elements in an array (by index) or object (by key) is constant
 * 4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop
 * 
 * 
 * O(n) means when n grows the number of operations grows
 * e.g. function logAtleast5(n) {
 *          for(var i=1;i<Math.max(5,n);i++) {
 *              console.log(i)
 *          }
 *      } 
 * Here Big O is O(n)
 */

/**
 * O(1) example
 * 
 * function logAtMost5(n) {
 *  for(var i=0;i<Math.min(5,n);i++) {
 *      console.log(i)
 *  }
 * }
 */

/**
 * Recap
 * 
 * 1. To analyze the performance of an algorithm, we use Big O Notation
 * 2. Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
 * 3. Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
 * 4. The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm.
 * 5. Big O Notation is everywhere, so get lots of practice!
 */