// Write your helper functions here!
require('isomorphic-fetch');
window.addEventListener("load", function() {
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   div= document.getElementById("missionTarget");
   div.innerHTML = `
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json.name}</li>
                    <li>Diameter: ${json.diameter} </li>
                    <li>Star: ${json.star}</li>
                    <li>Distance from Earth: ${json.distance} </li>
                    <li>Number of Moons: ${json.moons} </li>
                </ol>
                <img src="${json.image}">
                    `;
   
}

function validateInput(testInput) {
    if (testInput === "" ) {
        alert ("Empty")
    } else if (isNaN(testInput)) {
        alert ("Not a Number")
    } else {
        alert ("Is a Number")
    };

}
   
  
 

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let form = document.querySelector("testForm");
   form.addEventListener("submit", function(event){
    let pilotNameInput = document.getElementById("input[name=pilotName]");
    let copilotNameInput = document.getElementById("input[name=copilotName]");
    let fuelLevelInput = document.getElementById("input[name=fuelLevel]");
    let cargoMassInput = document.getElementById("input[name=cargoMass]");
    
    let result = validateInput(pilotNameInput)
    switch (result) {
        case "Empty":
            window.alert("All fields are required!");
            event.preventDefault();
            break;
        case "Is a Number":
            window.alert("Must be a name!");
            event.preventDefault(); 
            break;
         case "Not a Number":
            pilotStatus.innerHTML=`${pilotNameInput} is ready for launch`         
    }
    result = validateInput(copilotNameInput)
    switch (result) {
        case "Empty":
            window.alert("All fields are required!");
            event.preventDefault();
            break;
        case "Is a Number":
            window.alert("Must be a name!"); 
            event.preventDefault();  
        case "Not a Number":
                copilotStatus.innerHTML=`${copilotNameInput} is ready for launch`        
    }
    result = validateInput(fuelLevelInput)
    switch (result) {
        case "Empty":
            window.alert("All fields are required!");
            event.preventDefault();
            break;
        case "Not a Number":
            window.alert("Must be a number!");  
            event.preventDefault(); 
    }
    if (fuelLevelInput < 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML="Fuel level too low for launch";
        document.getElementById("launchStatus").style.color="red";
        launchStatus.innerHTML="Shuttle not ready for launch"


    }
    result = validateInput(cargoMassInput)
    switch (result) {
        case "Empty":
            window.alert("All fields are required!");
            event.preventDefault();
            break;
        case "Not a Number":
            window.alert("Must be a number!");
            event.preventDefault();       
    }
    if (cargoMassInput > 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML="Too much mass for the shuttle to take off.";
        document.getElementById("launchStatus").style.color="red";
        launchStatus.innerHTML="Shuttle not ready for launch"
    }
    document.getElementById("launchStatus").style.color="green";
    launchStatus.innerHTML="Shuttle is ready for launch"
        
    })
    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         response.json().then(funtion(json),{

         })

        });

    return planetsReturned;
}

function pickPlanet(planets) {
    return Math.floor(Math.random(planetsReturned) *6);
}
}),


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
