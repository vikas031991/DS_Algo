function bubbleSort(arr) {
  for(let i=0; i<arr.length-1; i++) {
    for(let j=i+1; j<arr.length; j++) {
      let temp;
      if(arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([-6, 20, 8, -2, 4]));
console.log(bubbleSort([8, 20, -2, 4, -6]));
