function removeDuplicates(input){
    let mySet = new Set(input)
    return Array.from(mySet)
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4]))