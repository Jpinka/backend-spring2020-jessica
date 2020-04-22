const fs = require("fs");
// Three methods of FS
// Checks to see if the file exists: fs.existsSync();
// read the file: fs.readFileSync();
// Write a new file or existing file: fs.writeFileSync(); Use appendFileSync to updade file instead 

// file needs to be in same folder as JS folder

const file = "practice.txt";

//check if the file exists...

if (fs.existsSync(file)){
    console.log (`File ${file} was found!`);

    //...and read it. Store the contents into variable data.
    let data = fs.readFileSync(file, "utf8");

    console.log(`The contents of the file are: '${data}'`);
    console.log(`Added '${text}' to the file ${file}.`);
    fs.appendFileSync(file, text, "utf8");

} else {
    console.log(`File '${file}' was not found!`);

    console.log(` Creating file with the name '${file}'`);
    //...otherwise create the "missing" file
    fs.writeFileSync(file, "", "utf8");

    console.log("Finished creating file");
}