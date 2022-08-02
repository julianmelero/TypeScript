// Tuple is an strong typed array

let user: [string,number] = ['julian',20];

console.log(user[0]);

// We can destructure a tuple, for example:
const [username, age] = user;
console.log(username);
console.log(age);
