let newArr = [1, 2, 3, 4, 5, 6, 7];

let newArr2 = newArr.map(n => n + 2);

console.log(newArr2);
// [ 3, 4, 5, 6, 7, 8, 9 ]
let newArr3 = newArr2.filter(n => n < 7);

console.log(newArr3);
// [ 3, 4, 5, 6 ]
let newArr4 = newArr3.reduce((a, b) => a + " " + b);

console.log(newArr4);
// 3, 4, 5, 6
console.log(typeof newArr4);
// string