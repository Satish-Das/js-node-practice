// primitive == work on call by value
// 7 types: String, number, boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

// both have different values 
const id = symbol('123')
const anotherId = symbol('123')

const bigNumber = 2472492834789468n
// console.log(typeof (bigNumber));

// Reference (non primitive)

// Array, objects, function
const heros = ["saktiman", "nagraj",doga];
let myObj = {
    Name : "Satish",
    age :21,
}

console.log(myObj);
