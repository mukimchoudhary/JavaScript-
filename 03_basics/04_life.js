// Immediately Invoked Function Expression (IIFE)

(function chai (){
    // nameed IIFE
    console.log(`DB CONNECTED`);
})() ;  // for avoideing the pollution from the globble scope (IIFE)

((name) => {
    // simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('Mukim')

