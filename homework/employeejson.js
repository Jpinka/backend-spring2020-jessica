//I am a small business owner with 3 employees and I need to let go 1 becasue of covad 19. I will create 3 objects with nested informaton on each employee's partner 


let myEmployees = {

    "name": "Lena",
    "age": 30,
    "productivityRating": 4,
    "partner":[{
        "name": "Jessica",
        "age": 31,
        "useful": true,
        "teamplayer": false
    }],
    
    "name": "Giovanni",
    "age": 30,
    "productivityRating": 5,
    "partner":[{
        "name": "Roman",
        "age": 22,
        "useful": false,
        "teamplayer": true
    }],
    
    "name": "Daisy",
    "age": 35,
    "productivityRating": 5,
    "partner":[{
        "name": "Lorna",
        "age": null,
        "useful": true,
        "teamplayer": false
    }]
};
    


// this will return a string becasue we used JSON.parse, and turn it into a JS object.

// [1].partner should return information about Giovanni's partner.
// console.log(JSON.parse(employeesjson)[1].partner)