const loc = document.getElementById("location");
const temNum = document.getElementById("temperature-num");
const temScale = document.getElementById("temperature-scale"); // Calling each and every ID
const weatherCon = document.getElementById("weather-condition");
const weatherIcon = document.getElementById("weather-icon");


//  To get the location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      getWeather(position.coords.latitude, position.coords.longitude);
    });
  } else {
    loc.innerHTML = "Geolocation is not supported by this browser.";
  }
}


//Getting the weather based off the location
function getWeather(lat, long) {
  const root = "https://fcc-weather-api.glitch.me/api/current?";
  fetch(`${root}lat=${lat}&lon=${long}`, { method: "get" })
    .then(resp => resp.json())
    .then(data => {
      updateDataToUI(data.name, data.weather, data.main.temp);
    })
    .catch(function(err) {
      console.error(err);
    });
}

// Moving the Api or updating it to DOM
function updateDataToUI(location, weather, temp) {
  weatherIcon.innerHTML = `<img src="${weather[0].icon}" />`;
  weatherCon.innerHTML = weather[0].main;
  loc.innerHTML = location;
  temNum.innerHTML = `${temp}`;
}

// Calling it the actual Weather and Location
window.onload = function() {
  getLocation();
};




















 /*var api = "https://fcc-weather-api.glitch.me/api/current?lon=:longitude&lat=:latitude/api/current?lon=:longitude&lat=:latitude";
    var longitude = "position.coords.longitude";
    var latitude = "position.coords.latitude";
    var temp = "°F"
    var temp1 = "C"
   
    
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
        
        
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
var weather = document.getElementById("weather");


function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
*/






/*button[0].onclick = function() {
  $("#points-of-sale").toggleClass("open");
  return false;
};
*/