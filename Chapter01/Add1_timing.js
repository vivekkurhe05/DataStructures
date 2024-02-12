function addUpTo(n) {
    let total = 0
    for(let i=1;i<=n;i++) {
        total+=i
    }
    return total
}

let time1 = performance.now()
addUpTo(1000000000)
let time2 = performance.now()
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

/**
 * Counting operations
 * 
 * 1. Assignment1 (total=0)
 * 2. Assignment2 ( i=1)
 * 3. n comparisons (i<=n)
 * 4. n additions and n assignments (i++)
 * 5. n additions and n assignments (total+=i)
 * 
 * So if n is 10, we got 50 operations + 2(assignments) means total 52 operations.
 */