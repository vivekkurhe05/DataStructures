function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        for (var j = i - 1; arr[j] > temp && j > -1; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = temp;
   }
   return arr;
}
 
console.log(insertionSort([4,2,6,5,1,3]))