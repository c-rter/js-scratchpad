let rabbit = {};
rabbit.speak = function (line) {
    let line2 = "hello";
    console.log(`The rabbit says '${line}'`);
    console.log(`The rabbit also says "${line2}"`);
};

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'