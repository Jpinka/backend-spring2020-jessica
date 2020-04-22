// Exploring  the "process.argv";
// Holds an array with all thee parts that were typed in the "terminal" or "console" in other cases.

console.log(`the array held by "process.argv" currently hold ${process.argv}`);
console.log(process.argv);


console.log(`Our first custom Bash argument is: ${process.argv[2]}`);