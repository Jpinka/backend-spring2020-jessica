// First argurment is what to run, second value is how long to wait form in milliseconds.

// the purpose of this is to learn how to pass functions to other functions what happens and how they work...???

// you can write multiple if statments. once you add an else statment you limit yourself. Or as Angie said "Because you want them both to happen. If you do else, it's only if the first if condition is not met".


function dpSetTimeout(instructions, timeoutLength, count = 1, pause = 0) {
// seprated out from Ed's line 20 so we dont crowd the conditional statement. In generally we would be added into that if statement.

if (typeof timeoutLength === "number" && typeof count === "mumber" && typeof pause === "number") {

} else {
    return 1;
}

    if (timeoutLength < 0 || pause < 0) {
        timeoutLength = 0;
    }

    if (pause < 0) {
        pause = 0;
    }

    if (typeof instructions === "function" && typeof timeoutLength === "number") {

        for (let i = 0; i < count; i++) {

            let pauseLength = pause * i;

            
            setTimeout(instructions, timeoutLength + pauseLength );
        }

        return 0;
    } else {
        return 1;

        
            // could we write the - sign as a string and add it to a positive number at a certian value?
    }
}

function mySpecialFunction() {
    console.log("running something here");
}

//HW: allow the dpSetTimeout to handle negative numbers.
dpSetTimeout(mySpecialFunction, -2000, -6, -1000);


// dpSetTimeout(function () {
//     console.log("this is the anonymous version.");
// }, 3000);


// let savedFunction = dpSetTimeout(function () {console.log("display data")}, "hello");

// if (savedFunction === 0) {
//     console.log("dpSetTimeout ran successfully");
// } else {
//     console.log("something went wrong");
// }


console.log("The script has finished!");