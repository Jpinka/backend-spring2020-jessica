// brings in the node FS package into our program 
const fs = require("fs");

// Three methods of FS
// Checks to see if the file exists: fs.existsSync();
// read the file: fs.readFileSync();
// Write a new file or existing file: fs.writeFileSync(); Use appendFileSync to updade file instead 

// file needs to be in same folder as JS folder

// Arguments: File to save as a string, data to save, charcter set
fs.writeFileSync("writtenbyjs.txt", "Information from JS.", "utf8");


// Use appendFileSync to update file instead
// this will create a file if one does not exist or override an existing file.


fs.appendFileSync("writtenbyjs.txt", " This was added to the end!", "utf8");



//delete file, do not use
// fs.unlinkSync("Document.rtf");