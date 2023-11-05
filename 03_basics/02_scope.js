let a = 10; // block scope variable  
const b = 20; 
var c = 300; // we known is globle scope 
// {} this is known is scope 
if(true){
    let a = 10;
    const b = 20;
    var c = 30; // overwrite the values
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Satish"
    function two(){ 
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    two()
}

// one()

// before defined you can access the function
console.log(addone(5))
function addone(num){
    return num + 1
}

// add function in variable then before defined you can't access the function
// console.log(addTwo(5));
const addTwo = function(){
    return num + 2
}




