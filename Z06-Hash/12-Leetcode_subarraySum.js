function subarraySum(nums, target) {
    const sumIndex = {};
    sumIndex[0] = -1;
    let currentSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        
        if (sumIndex.hasOwnProperty(currentSum - target)) {
            return [sumIndex[currentSum - target] + 1, i];
        }
        
        sumIndex[currentSum] = i;
    }
    
    return [];
}

console.log(subarraySum([1, 4, 20, 3, 10, 5], 33))
console.log(subarraySum([1, 2, 3], 3))


// or using Map

function subarraySum2(nums, target) {
    const sumIndex = new Map();
    sumIndex.set(0, -1);
    let currentSum = 0;
 
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        if (sumIndex.has(currentSum - target)) {
            return [sumIndex.get(currentSum - target) + 1, i];
        }
        sumIndex.set(currentSum, i);
    }
 
    return [];
}

console.log(subarraySum2([1, 4, 20, 3, 10, 5], 33))
console.log(subarraySum2([1, 2, 3], 3))
