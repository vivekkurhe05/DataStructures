function swap(arr, firstIndex, secondIndex){
    let temp = arr[firstIndex]
    arr[firstIndex] = arr[secondIndex]
    arr[secondIndex] = temp
}

function pivot(arr, pivotIndex = 0, endIndex = arr.length-1){
    let swapIndex = pivotIndex
    for(let i=pivotIndex+1; i<=endIndex; i++){
        if(arr[i] < arr[pivotIndex]){
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, pivotIndex, swapIndex)
    return swapIndex
}

let myArray = [4,6,1,7,3,2,5]
console.log(pivot(myArray))
console.log(myArray)