// singleton 
// object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Suman",
    "Full name": "Suman Bhatt",
    [mySym]: "mykey1",
    age: 22,
    Location: "Dharan",
    email: "Suman@google.com",
    isLoggedIn: false,
    lastLoginDays: ["MOnday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Suman@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "Suman@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());