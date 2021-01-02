// rest parameters

let restTest = (a, b, ...args) => {

    console.log(`A: ${a} B: ${b} The rest: ${args}`)

}

restTest (1, 2, 3, 4, 5, 6);

