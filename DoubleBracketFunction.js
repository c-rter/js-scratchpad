let doubleBracket = (num) => {
    return (bracket2Arg) => {
        console.log(num);
        console.log(bracket2Arg);
    }
}

doubleBracket(2)("hello");