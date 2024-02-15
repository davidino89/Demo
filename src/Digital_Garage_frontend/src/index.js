import { Digital_Garage_backend } from "../../declarations/Digital_Garage_backend";


window.addEventListener("load", async function() {
  // console.log("Finished loading");
  update();
});

document.querySelector("form").addEventListener("submit",async function(event) {
  event.preventDefault();
  var elements = document.getElementById("myForm").elements;
  var obj = {};
  for (var i = 0; i < elements.length; i++) {
    var item = elements.item(i);
    if (item.type !== "submit") obj[item.name] = item.value;
  }
  
  await Digital_Garage_backend.addVehicle(obj.licenseNumber,obj.vin,obj.model);
  update();
});

async function update() {
  const vehicles = await Digital_Garage_backend.readVehicles();
  const ul =  document.getElementById("listVehicles");
  ul.innerHTML = '';
  vehicles.forEach(function(value,idx){ 
  const li = document.createElement("li")
  li.innerText = "Veichle " + (idx+1) + ":" + " LicenceNumber: " + value.licenseNumber + " VIN: " + value.vehicleIdentificationNumber + " Model: " + value.model;  
ul.appendChild(li);
})
}
