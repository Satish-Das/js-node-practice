const userEmail = "adsds@lk.fm"

// if(userEmail){
//     console.log("got user email ");
// }else{
//     console.log("don't have user email");
// }

// falsy value
// false, 0, -0, BigInt,0n, "", null, undefined, NaN

// Truthy Valuse
// "0", 'false', " ", [], {}, function(){}


// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 //only work on false values
// val1 = undefined ?? 15 //only work on false values
val1 = null ?? 10?? 20

// console.log(val1);


// terniary Operator 

// Condition ? true : false

const iceteaprice = 100

iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80");


