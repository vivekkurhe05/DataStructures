let counter=0

function fib(n) {
    counter++
    if(n===0 || n===1){
        return n
    }

    return fib(n-1) + fib(n-2)
}

console.log(fib(7))
console.log(counter)