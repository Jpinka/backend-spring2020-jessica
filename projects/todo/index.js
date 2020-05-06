const fs = require("fs");
const express = require("express");
const bodyParser = require ("body-parser");

const app = express();
const http = require("http").Server(app);
const port = 8080;
http.listen(port);

console.log("express is running on port: " + port);
// finished expressed server setup

// setting up body-parser with express
app.use(bodyParser.urlencoded({extended: false}));
// Finished connecting body-parser with Express.

// setting up our save file
const filename = "./users/default_user.json";
let data = {
    "notes": []
}
if (fs.existsSync(filename)) {
    const read = fs.readFileSync(filename, "utf8");

} else {
    const converted = JSON.stringify(data);
    fs.writeFileSync(filename, converted, "utf8");
}

// finished setting up save file. 

// class definition for notes

class Note {
    constructor(){
        this.notes;
        this.author;
        this.completed_status; false;
        this.create_data = Date.now();
    }
}



//end class definition for notes
// Todo Routes
app.use("/", express.static("public_html/") );

app.post("/newnote", (request, response) => {
    let recievedData = request.body;

   /* let newNoteObject = {
        note: recievedData.note,
        author: recievedData.author,
        completed_status: false,
        create_date: Date.now()
    }; */

    data.notes.push(newNoteObject);

});
