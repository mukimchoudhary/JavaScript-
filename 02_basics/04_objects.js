//const tinderUser = new Object()// singletune object
const tinderUser = {}

tinderUser.id = "1234abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

//const regularUser = {
    email: "mukim@gmail.com"
   // "fullname": {
        userfullname : {
            firstname: "mukim"
            Lastname: "chaudhary"    

        
     //   }
   // }


//}
//console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign({}, obj1,obj2)
console.log(obj3);

console.log(object.keys(tinderUser));
console.log(object.values(tinderUser));
console.log(object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty(isLoggedIn));// it gives the value in boolen