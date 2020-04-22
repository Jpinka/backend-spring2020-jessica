// brings in the node FS package into our program 
const fs = require("fs");

// Three methods of FS
// Checks to see if the file exists: fs.existsSync();
// read the file: fs.readFileSync();
// Write a new file or existing file: fs.writeFileSync(); Use appendFileSync to updade file instead 
// file needs to be in same folder as JS folder
fs.readfileSync("example.txt", "utf8");


fs.existsSync("aFileThatDoesNotExist.txt");

console.log(doesFileExist);

if (doesFileExist) {
    fs.readFileSync("aFileThatDoesNotExist.txt does not exist!")
}
