// Object, Singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "mukim"
  //  "full name " : "mukim chaudhary",
  //  [mySym] : "mykey1"
    
    

}

//console.log(JsUser.name)
//console.log(JsUser[mySym]);

JsUser.greeting = function(){
    console.log("hello world");
}
console.log(JsUser.greeting());


