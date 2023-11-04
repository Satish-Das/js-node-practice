// singleton
// object.create create by constractor

// object literals 
const mysym = Symbol("key1")
const jsUser = {
    name: "Satish",
    "Full Name":"Satish Das",
    [mysym]:"mykey1",
    age: 20,
    location: "Rajkot",
    email: "dasskumar7909@gmail.com",
    isLoggedIn: false,
    lastlogin: ["monday","saturday"]
}
// console.log(jsUser);
// console.log(jsUser["Full Name"]);
// console.log(jsUser.email);
// console.log(jsUser[mysym]);

jsUser.email = "rkumar839@rku.ac.in"// overwrite 

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
}
// console.log(jsUser.greeting());
jsUser.greetingtwo()