// CALLBACKS AND FUNCTIONS: backend, wk 1, JS, practice folder

// Defining a function.
function functionName() {
    let text = "Hello there!";
    // On line 7, everything created in here is destroyed.
}

// Calling a function (multiple times)
functionName();
functionName();
functionName();

// return Keyword
function anotherFunction() {
    let number = 105;
    let text = "Some other text";
    let otherTextToSurvive = "Very important!";
    return [otherTextToSurvive, text, number];
}

let myArray = anotherFunction();

let results = ( 10 * myArray[2] ) + 100;

console.log(results);
//NaN
//undefined
//null
//0
//""
//false


// parameters and arguments

// Parameters are only defined in the parenthesis of the FUNCTION DEFINITION.
function argumentPractice(shouldIRun) {

    if (shouldIRun === 10) {
        console.log("This function ran.");
    }

}

argumentPractice();

// Arguments are provided in the parenthesis of the FUNCTION CALL.
argumentPractice(true);

console.log("hello");

// CALLBACKS

//EXAMPLE OF JQUERY, BUT WE ARE USIING NODE, THEREFORE JQUERY WILL NOT WORK

// providing fucntion to other functions. Like a bag of instructions you are giving to someeone else. (line below)

// $(document).ready( function() {} );

// Examples of methods, or functions that belong to objects.

console.log();
Math.random();

function callBackReader (parameter) {
    console.log("callBackReader had started.");

    console.log("our only parameter was given the value: " + parameter);

    if (typeof parameter === "function") {
        console.log("The data type of this value is a function.");
    } else {
        console.log("the prameter is holding somehting else, should only be a function");
    }

    console.log("callBackReader has ended.");
    
}

let mySpecialFunction = function () {
    console.log("My special function ran!");
}


callBackReader(mySpecialFunction);




// typeof kyword, returns a string that describes the datatype of the item after it.


console.log(typeof "string");


// Testing arrays is a little special compared to the typeof keyword.

console.log(Array.isArray(myArray));