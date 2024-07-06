/*
function sayMyName(){
    console.log("m");
    console.log("u");
    console.log("k");
    console.log("i");
    console.log("m"); 

}*/

//sayMyName()

//function addTwoNumbers (number1, number2){ // perameters

  //  console.log(number1 + number2);
//}

function addTwoNumbers (number1, number2){ // perameters
    //let result = number1 + number2
    //return result
//return number1 + number2
    //console.log(number1 + number2);
//addTwoNumbers(100,200) // arguments

function LoginUserMessage(username){
    return '${username} just logged in'
}

console.log(LoginUserMessage("mukim"))

function LoginUserMessage(username = "sam"){
    if (!udsername) {
        console.log("please enter a username");
        return
    
    }
    return '${username}just logged in'


}
console.log(LoginUserMessage(mukim))


function calculateCartPrice(....num1){
    return num1
}

//console.log(calculateCartPrice(200,400,500,2000))

const userr = {
    username: "mukim"
    price: 199
}

function handleobject(antobject){
    console.log(`username is ${anyabject.username} and price is $
        {anypbject.price}`);
}

const myArray = [200,400,100 ]

function returnSecoundValue(getArray){
    return getArray[1]
    
}
console.log(returnSecoundValue(myNewArray));
console.log(returnSecoundValue([200,400,500,1000]));