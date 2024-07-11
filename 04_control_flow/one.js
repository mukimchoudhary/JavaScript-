// if 
const isUserloggedIn = true
const temperature = 41

if ( temperature === 50){
    console.log("less than 50");
} else{
    console.log("temperature is greater then 50");

}
console.log("execute");

const userloggedIn = true
const debitCard = true
const loggedInFromEmail = true
const loggedInFromGoogle = false

if (userloggedIn && debitCard && 2==2){ //&& check both the statment is true then it will work
    console.log("Allow to by course");
}
if (loggedInFromGoogle || loggedInFromEmail){ // any one will be true it will work
    console.log("user logged in");

}