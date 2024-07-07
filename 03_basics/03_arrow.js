const user = {
    username: "Mukim",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }


}
//user.welcomeMessage()
//user.username = "sim" // we can change the value by using context
//user.welcomeMessage()

//console.log(this); // we are  in node environment so this refers to a empaty space
                   //  becouse there is nothing in globle context
     // this is only print in object not in function  
     
     //const chai = function(){
       // let username = "Hitesh"
      //  console.log(this.username);
     //}
     const chai = function(){
        let username = "Hitesh"
       // console.log(this.username);
     }

     //chai()

     // const addTwo = (num1, num2) => { // basics arrow function
       // return num1 + num2 // if we wrappeup in curly bracess then we have to write return
     // }

     const addTwo = (num1, num2) => (num1 + num2)

      console.log(addTwo(3,4))