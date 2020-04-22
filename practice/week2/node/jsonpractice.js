const fs = require("fs");

// JSON: JavaScript Object Notation. Before JSON, we had XML.

let myObject = {
    "myName": "Jess",
    "myJob": "sleep",
    "favFood":{
        food1:"cat",
        food2: "pizza",
        food3: "cat"
    },

};
//myObject.myFunction();

//let converted = myObject.toString();
//console.log(converted);

// Converts a JavaScript object to a string in the front of the format of JSON
JSON.stringify();

let converted = JSON.stringify(myObject);

//console.log(typeof converted);

//We write our JSON string to a file.
console.log("saving object to file!");
fs.writeFileSync("savedData.json", convrted, "utf8");
console.log("Finished.");


// we read our JSON from a file
let contents = fs.readFileSync("savedData.json", "utf8");
// console.log(typeof contents);

let anObjectAgain = JSON.parse(contents);
console.log(anObjectAgain);