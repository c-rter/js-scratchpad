let testArr = [10, 10, 10, 12];

let combo = testArr.filter(n => n < 12).map(n=> n + 10).reduce((a, b) => a + b);

console.log(combo);