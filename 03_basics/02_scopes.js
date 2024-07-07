// var C = 300
let a = 300 // globel scope
if (true){
    let a = 10
    const b = 20
    console.log("inner: ",a); // block scope


}
//console.log(a);

function one (){
    const username = "Mukim"

    function two(){ // nested function can easily eaxises form there parent function
        const website = "instagram"
      //  console.log(username);
    }
    
    two()

}

//one()

//++++++++++++++++ intresting +++++++++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}
addTwo(5)
const addTwo = function(num){
    return num + 2
}