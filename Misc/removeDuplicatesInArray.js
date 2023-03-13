function removeDuplicates(arr) {
    const temp = [];
    for(i=0; i<arr.length; i++) {
        if(temp.indexOf(arr[i]) === -1)
            temp.push(arr[i]);
    }
    return temp;
}

const arr = [-8, -6, -2,  0, 4, 8,  9, -6, 0, -2]; 
console.log("Using manual check using temp array ->", removeDuplicates(arr));
console.log("Using Set ->", [...new Set(arr)]);
console.log("Using Filter ->", arr.filter((val, index) => arr.indexOf(val) === index ));
console.log("Using manual check in same array ->", removeDuplicatesInSameArray(arr));

function removeDuplicatesInSameArray(arr) {
    for(i=0; i<arr.length; i++) {
        for(j=i+1; j<arr.length; j++) {
            if(arr[i] === arr[j])
                arr.splice(j, 1);
        }
    }
    return arr;
}
