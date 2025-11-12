// IMPORTS
import {createNavigation} from './modules/navigation.js'; 
import { createFooter } from './modules/footer.js';
import { Bosses } from './bosses.js';

// NAVIGATION
window.onload = (event) => {
    //console.log('DOM fully loaded and parsed');
    createNavigation();
    createFooter();
    fetchBosses();
};



function fetchBosses() {
    // fetch Elden Ring API
    fetch("https://eldenring.fanapis.com/api/bosses?limit=100")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(bosses => {
        //console.log(bosses);
        buildBossRater(bosses);
    })
    .catch((error) => console.error('FETCH ERROR:', error));
}

function buildBossRater(bosses){
    // Get the id from bosses.html where the list will go
    const parentElement_Boss = document.getElementById('boss-rater');

    // PICK A RANDOM BOSS
    let randomBoss = bosses.data[Math.floor(Math.random() * bosses.data.length)];

    // BOSS IMAGE
    if(randomBoss.image != null){ 
        const imgDiv = document.getElementById("boss-image-rater");
        const img = document.createElement("img");
        // set src to image element
        img.src = randomBoss.image;
        // attach image to div
        img.title = `${randomBoss.name}`;
        img.nodeValue = randomBoss.id;
        imgDiv.appendChild(img);
    } else {
        const imgDiv = document.getElementById("boss-image-rater");
        const img = document.createElement("img");
        // set src to image element
        img.src = '../images/no-image.png';
        // attach image to div
        img.title = `${randomBoss.name}`;
        img.nodeValue = randomBoss.id;
        imgDiv.appendChild(img);
    }

    // BOSS NAME
    const name = document.getElementById("boss-name-rater");
    name.innerHTML = randomBoss.name;

    const ratings = document.getElementById("ratings");
    
    
}


// handle submit button for ratings
function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    console.log({ value });
}
const ratingsForm = document.querySelector('form');
ratingsForm.addEventListener('submit', handleSubmit);