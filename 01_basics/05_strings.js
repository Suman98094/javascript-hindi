const name = "Suman "
const repoCount = 50

// console.log(name + repoCount + " Value");                            ***** not recommended

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);     ***** recommended

const gameName = new String('Suman-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "    Suman     "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://suman.com/suman%90bhatt"

// console.log(url.replace('%90', '-'));

// console.log(url.includes('suman'));

// console.log(gameName.split('-'));
console.log(gameName.isWellFormed());
