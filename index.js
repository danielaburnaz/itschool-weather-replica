const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

// if no city is stored in localStorage, default is Bucharest
if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

currentCityTag.innerHTML = currentCity;

// current weather and prediction
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);
