/*

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 23.8939

console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
console.log(hundreds.toLocaleString());

*/
// ------------------- Maths ---------------------------

// console.log(Math.abs(-4)); // always convert -ve value to +ve 
// console.log(Math.round(4.6)); // this function convert integer and coverd round 
// console.log(Math.ceil(4.2)); // this function round upper of the given values 
// console.log(Math.floor(4.298));// in this function remove point values
// console.log(Math.sqrt(16)); // this function find square root of the given Values 
// console.log(Math.min(2,45,6,778,8)); // return Minimum Values given in parameter 
// console.log(Math.max(2,45,6,778,8)); // return Maximum Values given in parameter 
// console.log(Math.random()); // this funtion always return values in 0 to 1
// console.log((Math.random()*10)+1); // have min values Start with 1
// console.log(Math.floor(Math.random()*10)+1); // have min values Start with 1


// formula of range the values using random function
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);