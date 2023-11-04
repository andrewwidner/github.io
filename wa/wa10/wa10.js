const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so Bob went for a walk. When they got to :inserty:, they stared in awe for a few moments, then :insertz:.— :insertx: picked up a rock that weighs 300 pounds, and it was really heavy. Then, :insertx: met up with Joe biden, and they got ice cream. After all, it was a really hot day! After everything, :insertx: and Bob walked back to :inserty:, and took a nap.";

const insertX = ["Fart Lester", "Aeternus", "Grace", "Andy", "Bikey"];

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



