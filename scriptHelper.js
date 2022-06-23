// Write your helper functions here!
require('isomorphic-fetch');
window.addEventListener("load", function() {
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   let button = document.getElementById("formSubmit");
   button.addEventListener("formSubmit", function(event){
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
       window.alert("All fields are required!");
        event.preventDefault();
    }
  
  else if (isNaN(pilotNameInput) == true) {
    text = "Not a Number";
}  else if (isNaN(pilotNameInput) == false) {
    text = "Is a Number";
    event.preventDefault();
  }
   else if (isNaN(copilotNameInput) == true){
    text = "Not a Number";
   } else if (!isNaN(copilotNameInput)== false){
    text = "Is a Number";
    event.preventDefault();
   }
   else if (isNaN(fuelLevelInput)== true){
    text = "Not a Number";
    event.preventDefault();
   } else if (isNaN(fuelLevelInput)== false){
    text = "Is a Number";
   }
   else if (isNaN(cargoMassInput)== true){
    text = "Not a Number";
    event.preventDefault();
   }
   else if (isNaN(cargoMassInput)== false){
    text = "Is a Number";
   }
}
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
