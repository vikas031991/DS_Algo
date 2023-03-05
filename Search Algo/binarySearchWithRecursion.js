function binarySearch(arr, n) {
   return search(arr, n, 0, rightIndex);
}

function search(arr, n, leftIndex, rightIndex) {
    if(leftIndex > rightIndex) {
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if(arr[middleIndex] === n)
        return middleIndex;
    if(n < arr[middleIndex])
        search(arr, n, leftIndex, middleIndex-1);
    else
        search(arr, n, middleIndex+1, rightIndex);
      
}

let arr = [-5, 2, 4, 6, 10];

console.log(linearSearch(arr, 10)); // from 0 index, 4
console.log(linearSearch(arr, 6)); // 3
console.log(linearSearch(arr, 20)); // -1