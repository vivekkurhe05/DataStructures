/**
 * A recursion is a function that calls itself until it doesn't.
 * 
 * Pseudo code
 * 
 * function openGiftBox() {
 *      if(isBall) return Ball
 *      openGiftBox()
 * }
 * 
 * There are two key rules you have to understand with recursion
 * 1. The process of opening each new box is the same. The process of doing whatever you are doing with recursion has to be the same.
 * 2. Each time we open a box, we make the problem smaller. Whatever you are doing with recursion each time you have the function call itself, it has to be operating on its smaller and smaller problem.
 */