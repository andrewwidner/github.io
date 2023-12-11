let number1 = document.getElementById('#1');
let number2 = document.getElementById('#2');
let number3 = document.getElementById('#3');
let number4 = document.getElementById('#4');
let number5 = document.getElementById('#5');
let number6 = document.getElementById('#6');
let number7 = document.getElementById('#7');
let number8 = document.getElementById('#8');
let number9 = document.getElementById('#9');
let number10 = document.getElementById('#10');
const numbersHolder = document.querySelector(".numbers");
numbersHolder.textContent = 'temp value';

const sound = new Audio();
const button = document.querySelector('button');
button.addEventListener('click', screwUpTheNumbers);


function screwUpTheNumbers() {
    sound.src = 'terror.mp3' ;
    sound.play();

    //if you're diggin around to try to find the solution to actually getting your random phone number in, here's the math!
  
    number1 = number1.value + 2;

    number2 = number2 + Math.random();

    number3 = number3 / 3;

    number4 = number4 * number4;

    number5 = Math.round(Math.random() * 10);

    number6 = number6;

    number7 = number7 + 0.0000000000001;

    number8 = number8/number8;

    number10 = 5 - number10;

 
    numbersHolder.textContent = "Thank you for submitting your number! Let's relay it back to you real quick \n " + number1 + " ... The first number is  /n The second number is.";
    numbersHolder.style.visibility = 'visible';
    console.log(numbersHolder);
   
}