let counter = 0

function fib(n){
    let fibArray = []
    fibArray[0] = 0
    fibArray[1] = 1

    for(let i=2; i<=n; i++){
        counter++
        fibArray[i] = fibArray[i-1] + fibArray[i-2]
    }

    return fibArray[n]
}

console.log(fib(7))
console.log(counter)