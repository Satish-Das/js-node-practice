const marvel_heros = ["thor","Ironman","Spider Man"]
const dc = ["Superman", "Flash","Batman"]

// marvel_heros.push(dc)
// console.log(marvel_heros);

// const newList = marvel_heros.concat(dc) // this is add array with another array
// console.log(newList);

const all_new_heros = [...marvel_heros, ...dc]
// console.log(all_new_heros);

const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = arr1.flat(Infinity)
// console.log(real_another_array); 
console.log(Array.isArray("Satish"));
console.log(Array.from("Satish"));