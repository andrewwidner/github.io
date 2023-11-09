const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["images/pic1.jpg", 
                "images/pic2.jpg", 
                "images/pic3.jpg", 
                "images/pic4.jpg", 
                "images/pic5.jpg"]


                
/* Declaring the alternative text for each image file */
const altText = {
    "image1": "A persons eye", 
    "image2": "just rock",
    "image3": "some flowers",
    "image4": "old paintings",
    "image5": "either moth or Butterfly"
}

console.log(altText["image4"])

/* Looping through images */

for(let i = 0; i < 5; i++) {


const newImage = document.createElement('img');
newImage.setAttribute('src', images[i]);
newImage.setAttribute('alt', altText['image'+(1+1)]);
thumbBar.appendChild(newImage);

function displayImage() {

    displayedImage.setAttribute('src', images[i]);
    displayedImage.setAttribute('alt', altText['image'+(1+1)]);

}

newImage.addEventListener("click", displayImage);

}

/* Wiring up the Darken/Lighten button */

function darken() {

    if(btn.getAttribute("class") === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,.1)";
    }
    else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,.8)";

    }
  
}

btn.addEventListener("click", darken);
