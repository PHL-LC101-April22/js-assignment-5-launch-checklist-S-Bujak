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
    if (testInput === "" ) {
        return "Empty"
    }; 
    if (isNaN(testInput)) {
        return "Not a Number"
    } else {
        return "Is a Number"
    };


   
  
 

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let button = document.getElementById("formSubmit");
   button.addEventListener("formSubmit", function(event){
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let result = pilotNameInput
    switch (result) {
        case "Empty":
            window.alert("All fields are required!");
            event.preventDefault();
            break;
        case "Is a Number":
            window.alert("Must be a name!");
            event.preventDefault();        
    }
    result = copilotNameInput
    switch (result) {
        case "Empty":
            window.alert("All fields are required!");
            event.preventDefault();
            break;
        case "Is a Number":
            window.alert("Must be a name!"); 
            event.preventDefault();      
    }
    result = fuelLevelInput
    switch (result) {
        case "Empty":
            window.alert("All fields are required!");
            event.preventDefault();
            break;
        case "Not a Number":
            window.alert("Must be a number!");  
            event.preventDefault();      
    }
    result = cargoMassInput
    switch (result) {
        case "Empty":
            window.alert("All fields are required!");
            event.preventDefault();
            break;
        case "Not a Number":
            window.alert("Must be a number!");
            event.preventDefault();       
    }
    })

        
    }
    }
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
