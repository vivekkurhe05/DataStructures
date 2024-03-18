function twoSum(nums, target) {
    const numObject = {};
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        
        if (numObject.hasOwnProperty(complement)) {
            return [numObject[complement], i];
        }
        
        numObject[num] = i;
    }
    
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))


// or using Map


// function twoSum2(nums, target) {
//     const numMap = new Map();
 
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         const complement = target - num;
 
//         if (numMap.has(complement)) {
//             return [numMap.get(complement), i];
//         }
//         numMap.set(num, i);
//     }
 
//     return [];
// }

// console.log(twoSum2([2, 7, 11, 15], 9))
// console.log(twoSum2([3, 2, 4], 6))