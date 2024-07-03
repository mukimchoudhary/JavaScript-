// Arrays

const myArr = [0,1,2,3,4,5]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[5]);

// array method

//myArr.push(6)
//myArr.pop() // it remove the last value
//console.log(myArr);

// myArr.unshift [the value come at the starting]
// myArr.shift()[remove the unshift value]

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));
//console.log(myArr);

console.log("A",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);