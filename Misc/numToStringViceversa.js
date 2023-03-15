// String to number
let str = '12345';
console.log('Given string is: "'+str+'" and typeof -> ', typeof str);
console.log('converted to -> ', typeof +str ,' using +');
console.log('converted to -> ', typeof parseInt(str) ,' using parseInt()');
console.log('converted to -> ', typeof Number(str) ,' using Number()');
console.log('converted to -> ', typeof Math.round(str) ,' using Math function');



// Number to string

function convertToString(num) {
    let str = '';
    while(num > 0) {
        str = num%10 + str;
        num = Math.floor(num/10);
    }
    return str;
}
console.log(convertToString(12345));
