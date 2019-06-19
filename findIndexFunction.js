let testArray = ["i", "am", "the", "cool", "human", "person", "totally", "notrobot"];
console.log(testArray.findIndex(i => i.length > 3));
let testArray2 = ["1", "77", "36"];
console.log(testArray2.findIndex(i => i < 70 && i > 3));
console.log(testArray2.findIndex(i => i == 1));