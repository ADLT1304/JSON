//convert the following objects to JSON

let power = {"voltage": 250, "current": 12}

let car = {"make": "Honda", "model": "Accord", "year": 2017}

let person = {"name": "Bob", "age":45, "email":"jim@email.com", "occupation": "teacher"}

// To illustrate how to use the JSON editor Tool we are going to create a JSON string with an array of 3 objects.The objects are:

// Object 1 contains the following key/value pairs:

// name=John,DOB=1/1/2000,Age=20

const users = `[
{"name": "John", "age":20, "dob": "1/1/2000"},

{"name": "Jim", "age":30, "dob": "21/2/1990"},

{"name": "Jane", "age":61, "dob": "6/11/1958"}
]`
//console.log the name in each object using JSON.parse

console.log(JSON.parse(users)[0].name)
console.log(JSON.parse(users)[1].name)
console.log(JSON.parse(users)[2].name)