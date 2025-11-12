// THIS IS FOR THE NAVIGATION
export {createNavigation};

// LIST FOR NAV LINKS
const links = [
    {label: "Home", url: "./home.html"}, 
    {label: "Bosses", url: "./bosses.html"},
    {label: "About", url: "./about.html"}
];

// NAV LINK FUNCTION
function createNavigation() {
    //console.log('DOM fully loaded and parsed');
    const navList = document.getElementById("nav-list");

    for (let link in links) {
        navList.innerHTML += "<li><a href = " + links[link].url + ">" + links[link].label + "</a></li>";
    }
}