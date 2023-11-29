const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const dadJoke = document.querySelector('.dadJoke');
const jokeHolder = document.querySelector(".joke");
const story = document.querySelector('.story');



function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so Bob went for a really fast run. When they got to :inserty:, they had an immense moment of clarity, then :insertz:.— :insertx: got hit by a meteor weighing 300 pounds, and somehow survived... Then, :insertx: met up with Bob, and they got ice cream. After all, it was a really hot day! After everything, :insertx: and Bob walked back to :inserty:, and took a nap. When they woke up, :insertx: told a dad joke. Click the button above to see what it was! (Hint: you can click it multiple times to get different results)";

const insertX = ["Fart Lester", "Aeternus", "Grace the Face", "Andy", "Bikey"];

const insertY = ["the UMC","Creekside","Hallett","Elmhurst"];

const insertZ = ["did a back flip","biked to denver","played the trombone","Took the RTD"];














randomize.addEventListener('click', result);


let newStory = storyText;
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(":insertx:", xItem);
newStory = newStory.replaceAll(":inserty:", yItem);
newStory = newStory.replaceAll(":insertz:", zItem);
//newStory = newStory.replaceAll(":insertJoke:", insertJoke);

dadJoke.addEventListener('click', giveDadJoke);


function result() {

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    
    const weight = Math.round(300/14) + " stone";

   newStory = newStory.replace("300 pounds", weight);

    const temperature =  Math.round((94-32)*(5/9)) + " centigrade";

    newStory = newStory.replace("94 fahrenheit", temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

async function getDadJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  return response.json();
}

async function giveDadJoke() {
  const { joke } = await getDadJoke();
  jokeHolder.textContent = "The joke " + xItem + " told was... " + joke + " ... " + xItem + " reflected on their decision to tell that joke, and decided that joke was really stupid!";
  jokeHolder.style.visibility = 'visible';


}