//  primitive

// 7 types : String, Number, Boolean, null
//           Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 34562465345687n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Suman",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof scoreValue);

// ***********************************

// Stack memory (Primitive), Heap memory (Non-Primitive)

let myYoutubename = "hiteshchaudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);