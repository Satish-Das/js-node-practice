// for of loop

// ["","", ""]
// [{},{},{}]

const arr = [1,2,3,4,5]

// for (const iterator of arr) {
//     console.log(iterator);
// }

// const greeting = "Hello World"
// for (const i of greeting) {
//     console.log(`Each char is ${i}`);
// }


//Maps => map always store unique values only, you forcefully store then ignore the values

const map = new Map();
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('FR', "France")

// console.log(map);

for (const key of map) {
    // console.log(key);
}


