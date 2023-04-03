// transforming value to km
function windToKmPerHour(meterPerSec) {
  return (meterPerSec * 3600) / 1000;
}

// generating link
function getWeatherIcon(iconCode) {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
