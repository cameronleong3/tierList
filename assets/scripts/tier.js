const TierColors = {
  S: "#44bd32",
  A: "#0097e6",
  B: "#8c7ae6",
  C: "#e1b12c",
  D: "#c23616",
  "?": "#7f8fa6",
};
console.log("HELLLOOOOOOOOOO")
/**
 * @function loadTierColors
 * @description For each .tier element, set the first child element's background
 *              color to the color specified in the TierColors variable.
 *
 */
const loadTierColors = function () {
  console.log("STARTING")
  //get all elements with the class "tier"
  const tiers = document.querySelectorAll('.tier')
  for(let i=0; i<tiers.length; i++){
    let parent = tiers[i].firstElementChild
    tier_name = tiers[i].getAttribute('data-tier')
    parent.style.backgroundColor = TierColors[tier_name]
    parent.style.textAlign = 'center'
    
  }
};

/**
 * @task Create drop listeners, make sure to the current state of the application
 * into localStorage once an item has been dropped into a tieer.
 * Resource: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
 */
 const drop_handler = function(ev){
  ev.preventDefault()
  console.log("dropping...")
  //don't let image be dropped onto other images
  let temp = ev.target.getAttribute('id')
  if(typeof temp === 'string'){
    console.log("cannot drag image there")
    return
  }
  //get id from dragstart event
  let dest_id = ev.dataTransfer.getData("text")
  console.log("dest_id = ",dest_id)
  //append image to tier container
  ev.target.appendChild(document.getElementById(dest_id));
}
const dragover_handler = function(event){
  console.log("dragging over...")
  event.preventDefault()
  event.dataTransfer.dropEffect = "move";
}
/**
 * @function  createTierDropzones
 * @description turn each .tier-container into a droppable zone
 */
const createTierDropzones = function () {
  //traverse to every tier container
  let containers = document.querySelectorAll('.tier-container')
  for(let i=0; i<containers.length; i++){
    //add event listeners
    containers[i].addEventListener("drop",drop_handler)
    containers[i].addEventListener("dragover",dragover_handler)
  }
};

/**
 * @task Add an event listener for the DOMContentLoaded (just like in restaurant.js)
 * to loadTierColors and createTierDropzones
 */
 window.addEventListener('DOMContentLoaded', () => {
  loadTierColors()
  createTierDropzones()
})

/**
 * @task Add an event listener for the dblClick function for the UNKNOWN data tier's h1
 * element to reset all the tiers and to store the new result
 */
const unknown = document.querySelector("[data-tier='?'] h1")
console.log(unknown)
unknown.addEventListener('dblclick',function(){
  console.log("double click detected")
  //remove all images
  const images = document.querySelectorAll('img')
  for(let i=0; i<images.length; i++){
    images[i].remove()
  }
  //reload the images
  createImages()
})