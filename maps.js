// What is the point of Maps?
// Maps provide a data structure that associate keys with values
// For example, mapping names to ages.
// Here it is in object form:
/*
let ages = {
    Boris:39,
    Liang: 22, 
    Julia: 62
};

console.log(ages.Boris);
console.log(ages["Liang"]);
console.log("Liang" in ages);
console.log("Jack" in ages);
console.log("toString" in ages);
*/

// toString derives from Object.prototype, so the property is there
// this adds danger to using plain objects as maps

// Map is written for key value pairs, anything can be a key

let ages = new Map ();
ages.set("Hello", 39);
ages.set(27, "Goodbye");

console.log(ages.get("Hello"));
console.log(ages.has("Hello"));
console.log(ages.get(27));
console.log(ages.has("Goodbye"));