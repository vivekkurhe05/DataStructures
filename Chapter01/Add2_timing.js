function addUpTo(n) {
    return n * (n+1) / 2
}

let time1 = performance.now()
addUpTo(1000000000)
let time2 = performance.now()
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

/**
 * Counting operations
 * 1. multiplication (n * ...)
 * 2. addition (n+1)
 * 3. division (/ 2)
 * 
 * So total operations in this solution is 3
 */