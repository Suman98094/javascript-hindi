const accountId = 144553
let accountEmail = "Suman@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// account = 2 not allowed

accountEmail = "abc@gmail.com"
accountPassword = "352452"
accountCity = "Delhi"
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])