export {buildBossList, buildBossDisplay};

// determine which link was clicked on boss page
let bossNodeId = "";


// build the image list on bosses page
function buildBossList(bosses) {
    // create document fragment
    let fragment = new DocumentFragment();

    const boss = bosses.data;
    // Get the id from bosses.html where the list will go
    const parentElement_Boss = document.getElementById('boss-link-list');

    // loop through the list in this file, append to html doc
    for(let i = 0; i < bosses.data.length; i++) {
        if(boss[i].image != null){
            const link_img = document.createElement('a');
            // set src to image element
            link_img.innerHTML = `<img src='${boss[i].image}'>`;
            // attach image to div
            link_img.title = `${boss[i].name}`;
            link_img.href = '../views/bossDetails.html?id='+boss[i].id+'';
            link_img.className = 'boss-node';
            link_img.nodeValue = boss[i].id;
            // append card to fragment
            fragment.appendChild(link_img);
        } else {
            const link_img = document.createElement('a');
            // set src to image element
            link_img.innerHTML = `<img src='../images/no-image.png'>`;
            // attach image to div
            link_img.title = `${boss[i].name}`;
            link_img.href = '../views/bossDetails.html?id='+boss[i].id+'';
            link_img.className = 'boss-node';
            link_img.nodeValue = boss[i].id;
            // append card to fragment
            fragment.appendChild(link_img);
        }
    }
    // insert fragment into DOM
    parentElement_Boss.appendChild(fragment);
}


// FOR BOSS INFORMATION DISPLAY
function buildBossDisplay(bosses) {
    // BOSS DETAILS
    const boss = bosses.data;
    // console.log(bosses);

    // get id from URL
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    const id = urlParams.get('id');

    for(let i = 0; i < bosses.data.length; i++) {
        if(boss[i].id == id) {
            
            // BOSS NAME
            const name = document.getElementById("boss-name");
            name.innerHTML = boss[i].name;
            
            // BOSS IMAGE
            if(boss[i].image != null){
                const imgDiv = document.getElementById("details-boss-image");
                const img = document.createElement("img");
                img.src = boss[i].image;
                img.title = `${boss[i].name}`;
                imgDiv.appendChild(img);
            } else {
                const imgDiv = document.getElementById("details-boss-image");
                const img = document.createElement("img");
                img.src = '../images/no-image.png';
                img.title = `${boss[i].name}`;
                imgDiv.appendChild(img);
            } 

            // BOSS DETAILS
            const description = document.getElementById("description");
            description.innerHTML = boss[i].description;
            const drops = document.getElementById("drops");
            drops.innerHTML = "Drops: " + boss[i].drops;
            const location = document.getElementById("location");
            location.innerHTML = "Location: " + boss[i].location;
            const region = document.getElementById("region");
            region.innerHTML = "Region: " + boss[i].region;
            const healthPoints = document.getElementById("health-points");
            healthPoints.innerHTML = "Health Points: " + boss[i].healthPoints;

            break;
        }
    }

}

export {bossNodeId};