// for of 



const arr = [1,2,3,4,5,6,7,8]

for (const num of arr){
   // console.log(num);
}

const greetings = "Hello world"
for(const greet of greetings){
  //  console.log(`Each char is ${greet}`);
}

// map 

//const map = new map()
//map.set('IN', "India")
//map.set('pak', "pakistan")

//console.log(map);

const myObject = {
    'game1': 'Nfs',
    'game2': 'spiderman'
}
for(const [key,value] of myObject) {
    console.log(key, ':-', value);

}