// my solution
function firstNonRepeatingChar(str){
    let obj = {}
    let count = 1
    let arr = []
    for(let i=0;i<str.length;i++){
        
        if(!(str[i] in obj)) {
            obj[str[i]] = count
        }else{
            count++
            obj[str[i]] = count
            count=1
        }
    }
    for(let key in obj){
        if(obj[key] === 1){
            arr.push(key)
        }
    }
    return arr.length > 0 ? arr[0] : null
}

console.log(firstNonRepeatingChar("aabbcc")) // should return null
console.log(firstNonRepeatingChar("aabbcde")) // should return c