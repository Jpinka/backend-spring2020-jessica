// Convert the following object into JSON and save that JSON file inside of the HW folder of YOUR repository.

const fs = require ("fs");


let objectToSave = {
    key1: "Some key",
    isTrue: false,
    someFunction: function () {console.log("hello");},
    totalAmount: 100900
};


// convert to JSON and save to File 
let converted = JSON.stringify (objectToSave);
fs. writeFileSync("savedChallanged.json", converted, "utf8");


// read JSON and convert to JS object
let data = fs.readFileSync("savedChallange.json", "utf8" );
let readObject = JSON. parse(data);
console.log(readObject.totalAmount, typeof readObject.totalAmount);


// my hw for 4-21-2020
// console.log ("save hw")
//fs.writeFileSync("jsonsave.json", JSON.stringify (objectToSave), "utf8");
//console.log("saved");



