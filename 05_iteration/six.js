const coding = ["js", "ruby", "java", "python","cpp"]

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

const mewNum = myNums.filter((n) => n > 4)
// console.log(mewNum);

// const nums = myNums.filter((n) => {
//     return n > 4
// })
// console.log(nums);

const newNums = []

// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

// ------------------ Chain ------------------------

const myNumber = [1,2,3,4,5,6,7,8,9,10]

const newNumbers = myNumber.map((n)=> n * 10)
                            .map((n) => n + 1)
                            .filter((n)=> n >= 40)
console.log(newNumbers);
