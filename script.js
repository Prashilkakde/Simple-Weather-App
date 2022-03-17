//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const weatherApi = {
  key: "a8e0c6d7a44d9a4d1140748020f78057",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};

// show default City

fetch(`${weatherApi.baseUrl}?q=nagpur&appid=${weatherApi.key}&units=metric`)
.then((weather) => {
  return weather.json();
})
.then(showWeatherReport);

// Event Listener on key press(enter)
const searchInputBox = document.getElementById("input-box");
searchInputBox.addEventListener("keypress", (event) => {
  console.log(searchInputBox.value);
  if (event.keyCode == 13) {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);

  }
});

// Get weather Report
function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherReport);
}
// Show weather Report

function showWeatherReport(weather) {
  console.log(weather);

  let city = document.getElementById("city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temperature = document.getElementById("temp");
  temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  let minMaxTemp = document.getElementById("min-max");
  minMaxTemp.innerHTML = `${Math.floor(
    weather.main.temp_min
  )}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

  let weatherType = document.getElementById("weather");
  weatherType.innerText = `${weather.weather[0].main}`;

  

  if (weatherType.textContent == "Clear") {
    document.body.style.backgroundImage = "url('images/bg.jpg')";
  } else if (weatherType.textContent == "Clouds") {
    document.body.style.backgroundImage = "url('images/cloud.jpg')";
  } else if (weatherType.textContent == "Haze") {
    document.body.style.backgroundImage = "url('images/Haze.jpg')";
  } else if (weatherType.textContent == "Rain") {
    document.body.style.backgroundImage = "url('images/rain.jpg')";
  } else if (weatherType.textContent == "Snow") {
    document.body.style.backgroundImage = "url('images/snow.jpg')";
  } else if (weatherType.textContent == "Thunderstorm") {
    document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
  }
}


