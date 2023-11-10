const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["images/img1.png", 
                "images/img2.png", 
                "images/img3.png", 
                "images/img4.png", 
                "images/img5.png"]


                
/* Declaring the alternative text for each image file */
const altText = {
    "image1": "A camera lens", 
    "image2": "Estes park",
    "image3": "Canyonlands",
    "image4": "my mountain picture",
    "image5": "our lovely president"
}

console.log(altText["img4"])

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
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,.1)";
    }
    else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,.8)";

    }
  
}

btn.addEventListener("click", darken);
