const userEmail = " mukim@880032"

if (userEmail){
    console.log("Got user email");
} else {
    console.log("dont have user email");
}

// falsy value
//false, 0, -0, BigInt 0n, "", undefined, Nan

// truthy value
// "0", 'false', " ",[], {}, function(){}

if(userEmail.length === 0) {
    console.log("array is empaty");

}

const empatyObj = {}
if(Object.keys(empatyObj).length ===0) {
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined
Val1 = null ?? 10 ?? 20
// in this only first value will assin except null and undefined
//console.log(val1);

// Terniary Operator

condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80"): console.log("more then 80");
