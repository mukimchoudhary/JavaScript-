# Project related to DOM
# project link [Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js)




# Solution code

## project 1 [Color Changer Button]

```Javascript
console.log("Mukim")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")


buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```
### project  2 solution

```Javascript

const form = document.querySelector('form');



form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;  
  } else if (weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;  
  } else {
   const bmi = (weight / ((height * height)/10000)).toFixed(2);
   // show the result 
   results.innerHTML = `<span>${bmi}</span>`;
  }
});

```
## project 3 solution

```javascript
//const clock = document.getElementById
const clock = document.querySelector('#clock');

setInterval(function (){
  let date = new Date();
  // console.log(data.toLocalTimeString());
  clock.innerHTML = date.toLocaleTimeString();

}, 1000);

```
## project 4 solution

```javascript

// Generate a random color

const randomcolor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random()*16)]
  }
  return color;
};
let intervalId;
const startChangingColor = function(){
  intervalId = setInterval(changeBgColor, 1000);
  
  function changeBgColor (){ 
   document.body.style.backgroundColor = randomcolor();
  }
};
const stopChangingColor = function(){
  clearInterval(intervalId);
  intervalId = null;

};

document.querySelector("#start").addEventListener
('click', startChangingColor)

document.querySelector("#stop").addEventListener
('click', stopChangingColor)