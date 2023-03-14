let num = 12321;
console.log(isPalindrome(num) === num ? 'Given number i.e.'+ num +' is Palindrome' : 'Given number i.e.'+ num +' is not Palindrome');

function isPalindrome(num) {
    let n = 0;
    while(num > 0) {
        n = n*10 + num%10;
        num = Math.floor(num/10);
    }
    return n;
}

let str = "aabczcbaa";
let reversedStr = str.split('').reverse().join('');
console.log(str === reversedStr ? 'Given string i.e.'+ str +' is Palindrome' : 'Given string i.e.'+ str +' is not Palindrome');

console.log(isStringPalindrome(str) ? 'Given string i.e.'+ str +' is Palindrome' : 'Given string i.e.'+ str +' is not Palindrome');

function isStringPalindrome(str) {
    let i=0, j=str.length-1;
    while(i <= j) {
        if(str[i] === str[j]){
            i+=1;
            j-=1;
        } else {
            return false;
        }
    }
    return true;
}
