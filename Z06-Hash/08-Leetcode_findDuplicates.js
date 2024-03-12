
// my solution
function findDuplicates(arr){
    let obj = {}
    let duplicates = []
    for(let i=0;i<arr.length;i++){
        if(!(arr[i] in obj)){
            obj[arr[i]] = 1
        }else{
            duplicates.push(arr[i])
        }
    }
    return duplicates
}

console.log(findDuplicates([1,2,3,4,4,5,6,6]))