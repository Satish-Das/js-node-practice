const promisOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, Cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000)
});

promisOne.then(function(){
    console.log("promise Consumed ");
})