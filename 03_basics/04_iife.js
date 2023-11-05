// immediately invoked function expressions (IIFE)
// ()()  
// (function chai(){
//     console.log(`DB CONNECTED`);
// })(); // End calling 

(function aurcode(){
    // named iife 
    console.log(`DB CONNECTED TWO`);
})();

((name) => {
    // unName IIFE 
    console.log(`DB CONNECTED TWO ${name}`);
})("Satish")
// -----------------------------------------------------------------------

/* 
    code => golbal Excution context / global Enviroment 
    code => Function Excution Context

    Memory Creation phase =>{ variablie -> undefined 
                    variable -> undefind 
                    addnumFunction -> defination
    }

    Excution Phase =>{
        variable <- store values
        function <- create excution context
    }

*/