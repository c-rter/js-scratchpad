let countBs = (bStr) => {
    let total = 0;
    for (char of bStr) {
        if (char === "B") total++;
    }
    return total;
}

let countChar = (bStr, chr) => {
    let total = 0;
    for (char of bStr) {
        if (char === chr) total++;
    }
    return total;
}

console.log(countBs("BBC"));
// → 2
 console.log(countChar("kakkerlak", "k"));
// → 4