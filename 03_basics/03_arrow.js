const user = {
    username:"hitesh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Satish"
// user.welcomeMessage()

// console.log(this);


function ManyValues(){
    let username = "Satish"
    console.log(this.username);
    // console.log(this);
}
// ManyValues()

// const vlu = function ManyValues(){
//     let username = "Satish"
//     console.log(this.username);
//     // console.log(this);
// }
// vlu()


// const chai = () => {
//     let username = "satish"
//     console.log(this.username);
// }

// chai()

// arrow function => 

// expicit Arrow function with return statement 
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3,4));

// implecit Arrow
// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => (num1 + num2);
console.log(addTwo(3,4));