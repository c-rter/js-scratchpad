let range = (start, end, step = start < end ? 1 : -1) => {
    let array = [];
    if (start < end) {
        for (i = start; i <= end; i += step) array.push(i);
    }
    else {
        for (i = start; i >= end; i += step) array.push(i);
    }
    return array;
};

let sum = (array) => {
    let total = 0;
    for (let item of array) {
        total += item;
    }
    return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55