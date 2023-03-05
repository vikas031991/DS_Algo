function linearSearch(arr, n) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === n)
            return i;
    }
    return -1;
}

let arr = [-5, 2, 10, 4, 6];

console.log(linearSearch(arr, 10)); // from 0 index, 2
console.log(linearSearch(arr, 6)); // 4
console.log(linearSearch(arr, 20)); // -1