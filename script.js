alert("Weather Location, Here is yours!");
const loc = document.getElementById("location");
const temperNum = document.getElementById("temperature-num");
const temperScale = document.getElementById("temperature-scale"); // Calling each and every ID
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
() => {
  
}

// Calling the actual weather API request using fetch as well as update the data to DOM
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

// Moving the Api or updating it to DOM. It overall overwrites the code to DOM
function updateDataToUI(location, weather, temp) {
  weatherIcon.innerHTML = `<img src="${weather[0].icon}" />`;
  weatherCon.innerHTML = weather[0].main;
  loc.innerHTML = location;
  temperNum.innerHTML = `${temp.toFixed()}`;
}

// Calling it the actual Weather and Location
window.onload = function() {
  getLocation();
};

//To change the celsius to fahrenheit , the start of the toggle button
function cToF(celsius) {
  return celsius * 9 / 5 + 32;
}

// change from Fahrenheit to Celsius 
function fToC(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// This is considered the handle function , in which changes the Celsius to Fahrenheit (Prior towards Event listener)
function toggleScale() {
  if (temperScale.innerHTML === "C") {
    temperNum.innerHTML = cToF(temperNum.innerHTML).toFixed(0);
    temperScale.innerHTML = "F";
  } else if (temperScale.innerHTML === 'F') {
    temperNum.innerHTML = fToC(temperNum.innerHTML).toFixed(0);
    temperScale.innerHTML = "C";
  }
}

// Everytime the user clicks on the Celsius symbol it changes from Celsius to Fahrenheit
temperScale.addEventListener("click", toggleScale);















 