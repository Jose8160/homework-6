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
      document.querySelector(".city").innerHTML = data.name;
      console.log(data.weather[0]);

      document.querySelector(".current-weather").innerHTML =
        "<h3>" +
        data.weather[0].description +
        "</h3>" +
        "<p>" +
        data.weather[0].main +
        "</p>" +
        "<p>" +
        data.weather[0].icon +
        "</p>";

      // other way to get icon in DOM
      // document.querySelector(".current-weather").innerHTML =
      // document.querySelector(".icons")
      // .src ="http://openweathermap.org/img/w/” + icon + “01n.png;";
      // console.log(data.weather[0]);

      document.querySelector(".temp").innerHTML =
        "<p>" + data.main.temp + "</p>";
      console.log(data.main.temp);

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

const storageInput = document.querySelector(".storage");
const text = document.querySelector(".text");
const button = document.querySelector(".button");

storageInput.addEventListener("input", (letter) => {
  text.textContent = letter.target.value;
});

const saveStorage = () => {
  localStorage.setItem("textinput", text.textContent);
  button.addEventListener("click", saveStorage);
};
