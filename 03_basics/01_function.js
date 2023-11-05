// function 
function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("T");
    console.log("I");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumber(num1, num2){ // here use passed parameter 
//     console.log(num1 + num2);
// }

// addTwoNumber() // return NaN
// addTwoNumber(4,5) // pass the number we are called arguments

function addTwoNumber(num1, num2){ // here use passed parameter 
    let sum = num1 + num2;
    return sum;
}

// const sumOf = addTwoNumber(3,4);
// console.log(sumOf);

function loginUserMessage(username){
    if(!username){
        console.log("please enter a username ");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Satish")) 
// console.log(loginUserMessage(""))
// console.log(loginUserMessage()) // print undefined 

// ... this rest operator and spraid operator
function calculatecartprice1(val1,val2,...num1){
    return num1
}

function calculatecartprice(num1){
    return num1
}
// console.log(calculatecartprice(220,300,400,2000));
// console.log(calculatecartprice1(220,300,400,2000));

const user = { // create object 
    username:"Satish",
    price:199
}
// below create function named is handleobject()
function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// Calling function 
// handleobject(user)


// calling function direct passed object
handleobject({
    username:"Sambhu",
    prices: 299
})


// create array named myArray
const myArray = [200,400,100,600]
// this is function passed with parameter array
function reutrnsecondvalue(getArray){
    return getArray[1]
}
console.log(reutrnsecondvalue(myArray)); // calling function with array argument 