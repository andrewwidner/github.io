var number1 = Number(prompt("Welcome to our site! To get started, enter the first number of your phone number:"));
var number2 = Number(prompt("Enter the second number of your phone number:"));
var number3 = Number(prompt("Enter the third number of your phone number:"));
var number4 = Number(prompt("Enter the fourth number of your phone number:"));
var number5 = Number(prompt("FASTER Enter the fifth number of your phone number:"));
var number6 = Number(prompt("Enter the sixth number of your phone number:"));
var number7 = Number(prompt("Enter the seventh number of your phone number:"));
var number8 = Number(prompt("Come on we dont have all day enter the eighth number of your phone number:"));
var number9 = Number(prompt("Enter the ninth number of your phone number:"));
var number10 = Number(prompt("COULD YOU BE ANY SLOWER Enter the tenth number of your phone number:"));


const feedback = prompt("Please leave some brief feedback on our phone system. We will be SURE to read it");
//we wont


const numbersHolder = document.querySelector(".numbers");
numbersHolder.textContent = 'temp value';



const sound = new Audio();
const chaos = document.getElementById("chaos");
chaos.addEventListener('click', screwUpTheNumbers);




function screwUpTheNumbers() {
    sound.src = 'terror.mp3' ;
    sound.play();

    //if you're diggin around to try to find the solution to actually getting your random phone numbe1r in, here's the math!
  
    number1 = number1 + 2;

    number2 = number2 + number1;

    number3 = number3 * number3;

    number4 = 4 + number4;

    number5 = Math.round(Math.random() * 10);

    number7 = number7 * number7 * + number2;

    number8 = number8 - number1;

    number10 = 5 - number10;

 
    numbersHolder.textContent = "Thank you for submitting your number! Let's relay it back to you real quick." + "\n" + "We got: 1+ (" +  number1 + " " + number2 + " " + number3 + ") " + number4 + " " + number5 + " " + number6 + "  " + number7 + " " + number8+ " " + number9+ " " + number10 + "\n" + "If that is incorrect, PLEASE hit the reset button and go through the whole thing again. Also, please don't click the button again without resetting, unless you want some really big numbers"; 
    numbersHolder.style.visibility = 'visible';
    reset.style.visibility = 'visible';
    console.log(numbersHolder);


    
   
}

