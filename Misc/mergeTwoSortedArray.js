function merge(leftArr, rightArr) {
  let sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if(leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(merge([-6, -2, 4, 8, 20], [-8, 0, 9, 15]));
console.log(mergeWithoutShift([-6, -2, 4, 8, 20], [-8, 0, 9, 15]));

function mergeWithoutShift(leftArr, rightArr) {
  let sortedArr = [], i=0, j=0;
  while (i<leftArr.length && j<rightArr.length) {
    if(leftArr[i] <= rightArr[j]) {
      sortedArr.push(leftArr[i]);
      i+=1;
    } else {
      sortedArr.push(rightArr[j]);
      j+=1;
    }
  }
  if(i<leftArr.length) {
      sortedArr.push(...leftArr.slice(i))
  } else {
      sortedArr.push(...rightArr.slice(j))
  }
  return sortedArr;
}
