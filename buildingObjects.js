let basicObject = {

    basicValue : 40,
    basicArray : [1, 2, 3],
    basicMethod : function (param1) {
        return `"Hello, ${param1}."`
    }
}

console.log(basicObject);
console.log(basicObject.basicMethod("Joe"));
console.log(Object.keys(basicObject));

