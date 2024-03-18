function hasUniqueChars(str){
    const chars = Array.from(str)
    let mySet = new Set()
    for(let i=0;i<chars.length;i++){
        if(mySet.has(chars[i])) return false
        else mySet.add(chars[i])
    }
    
    return true
}

console.log(hasUniqueChars("hello"))
console.log(hasUniqueChars("abcd"))