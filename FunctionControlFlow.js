// control flow adaptation from ejs c. 5

let repeat = (n, action) => {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

let simpleTest = (test, then) => {
    if (test) then();
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

repeat(alphabet.length, n => {
    simpleTest(alphabet[n] == "a"
        || alphabet[n] == "e"
        || alphabet[n] == "i"
        || alphabet[n] == "o"
        || alphabet[n] == "u", () => {
            console.log(alphabet[n] + " is vowel");
        });
});