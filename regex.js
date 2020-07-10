let re1 = new RegExp("abc");
let re2 = /abc/;
console.log(re2);
console.log(typeof re2);

let eighteenPlus = /eighteen\+/
console.log(eighteenPlus);

console.log(/abc/.test("abcde"));
// → true
console.log(/abc/.test("abxde"));
// → false

const beasts = "aabison";

console.log(beasts.indexOf('bison'));
// expected output: 1