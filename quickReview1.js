let min = (...numbers) => {
    let minimum = Infinity;
    for (number of numbers) {
        if (number < minimum) {
            minimum = number;
        }
    }
    return minimum;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10, -20, -30));
// → -30