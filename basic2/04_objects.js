// singleton

// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Simi"
tinderUser.isLoggedIn = false

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// console.log(tinderUser);

const details = {
    fullName: {
        FirstName: "Satish",
        lastName: "das"
    }
}

// console.log(details.fullName.FirstName);
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c",4:"D"}

const obj3 = {obj1, obj2}// inside the object 
// console.log(obj3);

const obj4 =Object.assign({}, obj1,obj2)
// console.log(obj4);