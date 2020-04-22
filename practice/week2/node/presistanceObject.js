// Topics used in this file are: FS Package, JSON, JavaScript Objects
const fs = require ("fs");

// Placeholder for our object
let presistentObject = null;

// the file we are working with so we dont accidently use another string
let filename = "presistantObject.json";

//check if file exists or not
let doesFileExist = fs.existsSync(filename);

// if exists
if (doesFileExist) {

    // ...read it...
    let existingJSON = fs.readFileSync(filename);
    console.log(`Read file: ${existingJSON}`);

    // ...and convert it to an object...
    presistentObject = JSON.parse(existingJSON);
    console.log(`Object converted from JSON:`);
    console.log(presistentObject);

} else {
    console.log("File does not exist, creating new file");
    fs.writeFileSync(filename, "{}", "utf8");

}

fs.writeFile();
fs.writeFileSync();