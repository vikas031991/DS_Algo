function binarySearch(arr, n) {
    let leftIndex = 0;
    let rightIndex = arr.length-1;
    
    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(n === arr[middleIndex])
            return middleIndex;
        if(n < arr[middleIndex])
            rightIndex = middleIndex - 1;
        else
            leftIndex = middleIndex + 1;
    }
    return -1;
}

let arr = [-5, 2, 4, 6, 10];

console.log(linearSearch(arr, 10)); // from 0 index, 4
console.log(linearSearch(arr, 6)); // 3
console.log(linearSearch(arr, 20)); // -1