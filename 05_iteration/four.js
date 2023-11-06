const myObject ={
    js: 'javaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
// for print values of keys 
for (const key in myObject) {
    // console.log(key);
}
// for print keys of values 

for (const key in myObject) {
    // console.log(myObject[key]);
}
for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} : shortcut is for :  ${myObject[key]}`);
}

const programming =["js","rb","py","java","cpp"]
for (const key in programming) { // return the index values 
    // console.log(key);
    console.log(programming[key]);
}