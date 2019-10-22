// Write your JavaScript code here!
	window.addEventListener("load", function() {
		fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
			response.json().then( function(json) {
				const div = document.getElementById("missionTarget");
				console.log(json);
				function randomMission(json){
					let mission = Math.floor(Math.random()*json.length);
					return mission;
				 }
				 let m=randomMission(json)
				div.innerHTML=`
					<h2>Mission Destination</h2>
					<ol>
						<li>Name: ${json[m].name}</li>
						<li>Diameter: ${json[m].diameter}</li>
						<li>Star: ${json[m].star}</li>
						<li>Distance from Earth: ${json[m].distance}</li>
						<li>Number of Moons: ${json[m].moons}</li>
					</ol>
					<img src="${json[m].image}"></img>`;
			});
		});
	
	
	
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         let pilotNameInput = document.querySelector("input[name=pilotName]");
         let copilotNameInput = document.querySelector("input[name=copilotName]");
		 let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
		 let cargoWeightInput = document.querySelector("input[name=cargoWeight]");
		 
         
		 //Wrong data type and blank input validation
		 if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" ||  cargoWeightInput.value === "" ) {
			alert("All fields are required!");
			document.getElementById("launchStatus").innerHTML="Shuttle not ready for launch";
			launchStatus.style.color="red";
			event.preventDefault();
			
         }else if(isNaN(pilotNameInput.value)===false || isNaN(copilotNameInput.value)===false){
			 alert("Make sure to enter valid information for each field!");
			 document.getElementById("launchStatus").innerHTML="Shuttle not ready for launch";
			launchStatus.style.color="red";
			 event.preventDefault();

		 }else if(isNaN(fuelLevelInput.value)===true || isNaN(cargoWeightInput.value)===true){
			 alert("Make sure to enter valid information for each field!");
			 document.getElementById("launchStatus").innerHTML="Shuttle not ready for launch";
			launchStatus.style.color="red";
			 event.preventDefault();
			 
		 }
		//Fuel and Cargo Validation for Liftoff
		 if(fuelLevelInput.value<10000){
			faultyItems.style.visibility="visible";
			document.getElementById("fuelStatus").innerHTML="Not enough fuel for the journey";
			document.getElementById("launchStatus").innerHTML="Shuttle not ready for launch";
			launchStatus.style.color="red";
			event.preventDefault();
			
		 }else if(cargoWeightInput.value>10000){
			faultyItems.style.visibility="visible";
			document.getElementById("cargoStatus").innerHTML="Too much mass for the shuttle to takeoff";
			document.getElementById("launchStatus").innerHTML="Shuttle not ready for launch";
			launchStatus.style.color="red";
			event.preventDefault();
			
		 }else if(cargoWeightInput.value<10000 && fuelLevelInput.value>10000){
			launchStatus.style.color="green";
			document.getElementById("launchStatus").innerHTML="Shuttle is ready for launch";
			document.getElementById("fuelStatus").innerHTML="Fuel level high enough for launch";
			document.getElementById("cargoStatus").innerHTML="Cargo weight low enough for launch";
			event.preventDefault();
		 }
      });
   });
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
