// var weatherEl = document.querySelector(weatherIcon);
// var temperatureEl = document.querySelector(temperature-detail );
// var LocationEl = document.querySelector(location );
var Key = "199e10c35563a5ea2bc31cba23e1d3f9";

function getCurrentWeather(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=" +
      Key
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      getForcast(data.coord.lat, data.coord.lon);
    });
}

function getForcast(lat, lon) {
  fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&units=imperial&appid=" +
      Key
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getCurrentWeather("kansas city");
