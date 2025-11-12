//  IMPORTS
import { createNavigation } from './modules/navigation.js'; 
import { createFooter } from './modules/footer.js';
import { buildBossList, buildBossDisplay } from './modules/bossList.js';

// BOSS CLASS
// CONSTANTS
class Bosses {
    constructor(id = "none", difficulty = 0, ugliness = 0, beauty = 0, annoyance = 0) {
        this.id = id;
        this.difficulty = difficulty;
        this.ugliness = ugliness;
        this.beauty = beauty;
        this.annoyance = annoyance;
    }

    

    getAttributes() {
        const element = document.getElementById("boss-ratings");
        const attrNode = document.createTextNode(
            `Difficulty: ${this.difficulty}`
            `Ugliness: ${this.ugliness}`
            `Beauty: ${this.beauty}`
            `Annoyance: ${this.annoyance}`
            );

        element.appendChild(attrNode);
    }
}



// variable to send to controller
var action = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

// CONTROLLER
window.onload = (event) => {
    switch(action) {
        case 'bossDetails.html':
            // NAVIGATION
            createNavigation();
            createFooter();
            
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
                // Build display for selected boss
                buildBossDisplay(bosses);
            })
            .catch((error) => console.error('FETCH ERROR:', error));
            break;
        case 'bosses.html':
            // NAVIGATION
            createNavigation();
            createFooter();

            // Build boss list
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
                buildBossList(bosses);
            })
            .catch((error) => console.error('FETCH ERROR:', error));

            break;
        default: 
            console.log('error');
    }
}

// EXPORTS
export {Bosses};