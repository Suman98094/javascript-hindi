// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myHeros[0]);
// console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()

// console.log(typeof myArr);
// console.log(typeof newArr);

// slice, spice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log("B ", myArr);
console.log(myn1);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

