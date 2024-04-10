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

function quickSort(arr, left=0, right=arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex-1)
        quickSort(arr, pivotIndex+1, right)
    }
    return arr
}

console.log(quickSort([4,6,1,7,3,2,5]))