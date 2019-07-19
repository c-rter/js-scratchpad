/* let rabbit = {};
rabbit.speak = function (line) {
    let line2 = "hello";
    console.log(`The rabbit says '${line}'`);
    console.log(`The rabbit also says "${line2}"`);
}; 

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.' 

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("Oh my ears and whiskers, " +
    "how late it's getting!");

hungryRabbit.speak("I could use a carrot right now."); 

// DIFFERENCE BETWEEN ARROW FUNCTIONS AND FUNCTION KEYWORD IN REGARDS TO THIS BINDING



function normalize() {
    console.log(this.coords.map(function(num) {
        console.log(this.length);
        return num / this.length;
    }));
}

function normalize2() {
    console.log(this.coords.map(num => {
        console.log(this.length);
        return num / this.length;
    }));
}

normalize.call({ coords: [0, 2, 3], length: 5 });
// → [0, 0.4, 0.6]

normalize2.call({ coords: [0, 2, 3], length: 5 });
// → [0, 0.4, 0.6]

*/

// EXPERINMENTS WITH THIS FUNCTION BINDINGS

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }

speak("test");
