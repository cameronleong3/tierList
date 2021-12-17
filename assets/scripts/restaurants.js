/**
 * Once this script is loaded, you'll have access to a global variable
 * called Restaurants. Remember to load your scripts in the correct order
 * though. If loaded in the improper order, scripts loaded before this one
 * may not have access to the Restaurants object.
 */
const Restaurants = {
  arbys: {
    path: "./assets/images/arbys.jpg",
    tier: "UNKNOWN",
  },
  bk: {
    path: "./assets/images/bk.jpg",
    tier: "UNKNOWN",
  },
  canes: {
    path: "./assets/images/canes.jpg",
    tier: "UNKNOWN",
  },
  carlsjr: {
    path: "./assets/images/carlsjr.jpg",
    tier: "UNKNOWN",
  },
  chickfila: {
    path: "./assets/images/chickfila.jpg",
    tier: "UNKNOWN",
  },
  chipotle: {
    path: "./assets/images/chipotle.jpg",
    tier: "UNKNOWN",
  },
  dennys: {
    path: "./assets/images/dennys.jpg",
    tier: "UNKNOWN",
  },
  dominos: {
    path: "./assets/images/dominos.jpg",
    tier: "UNKNOWN",
  },
  elpolloloco: {
    path: "./assets/images/elpolloloco.jpg",
    tier: "UNKNOWN",
  },
  fiveguys: {
    path: "./assets/images/fiveguys.jpg",
    tier: "UNKNOWN",
  },
  ihop: {
    path: "./assets/images/ihop.jpg",
    tier: "UNKNOWN",
  },
  innout: {
    path: "./assets/images/innout.jpg",
    tier: "UNKNOWN",
  },
  jackinthebox: {
    path: "./assets/images/jackinthebox.jpg",
    tier: "UNKNOWN",
  },
  kfc: {
    path: "./assets/images/kfc.jpg",
    tier: "UNKNOWN",
  },
  mcdonalds: {
    path: "./assets/images/mcdonalds.jpg",
    tier: "UNKNOWN",
  },
  panda: {
    path: "./assets/images/panda.jpg",
    tier: "UNKNOWN",
  },
  panera: {
    path: "./assets/images/panera.jpg",
    tier: "UNKNOWN",
  },
  popeyes: {
    path: "./assets/images/popeyes.jpg",
    tier: "UNKNOWN",
  },
  shackeshack: {
    path: "./assets/images/shakeshack.jpg",
    tier: "UNKNOWN",
  },
  sonic: {
    path: "./assets/images/sonic.jpg",
    tier: "UNKNOWN",
  },
  tacobell: {
    path: "./assets/images/tacobell.jpg",
    tier: "UNKNOWN",
  },
  whataburger: {
    path: "./assets/images/whataburger.jpg",
    tier: "UNKNOWN",
  },
  wingstop: {
    tier: "UNKNOWN",
    path: "./assets/images/wingstop.jpg",
  },
};


const createImages = function () {
  console.log("creating images...")
  Object.entries(Restaurants).forEach(entry => {
    let img = document.createElement('img');
    const [key, value] = entry;
    //console.log("Key:",key,"Value:",value);
    img.height = '50'
    img.width = '50'
    img.src = value.path
    img.draggable = 'true'
    img.id = key
    //add dragstart event listener to all images
    img.addEventListener("dragstart", function(event){
      console.log("starting drag...")
      event.dataTransfer.effectAllowed = "move"
      //send id
      event.dataTransfer.setData("text",img.id)
    })
    document.querySelector('[data-tier="?"] .tier-container').appendChild(img);

  });
}



/**
 * @task add an event listener for the DOMContentLoaded event
 * that loads all the restaurant images into different tirs
 */
window.addEventListener('DOMContentLoaded', () => {
  createImages()
})