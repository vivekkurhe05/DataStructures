let memo = []
let counter = 0
function fib(n){
    counter++

    if(memo[n] !== undefined){
        return memo[n]
    }

    if(n === 0 || n === 1){
        return n
    }

    memo[n] = fib(n-1) + fib(n-2)
    return memo[n]
}

console.log(fib(7))
console.log(counter)