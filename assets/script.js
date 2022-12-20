var button = document.querySelector(".button");
var inputValue = document.querySelector("#inputValue");
var resultsContainer = document.querySelector("#weather-results");
var city = document.createElement("h3");
var dateValue= document.getElementById("#currentToday")
resultsContainer.append(city);


function getWeather() {}

button.addEventListener("click", function (event) {
  event.preventDefault;
  console.log(inputValue.value);
  var city = inputValue.value;

  function renderWeather(weather) {
    console.log(weather);
   // Pulling the same day Weather forecast API.
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=65ea356fac868b7989b751cef0bfce08&units=imperial"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        

        var city = document.createElement("p");
        city.textContent = data.name;
        resultsContainer.append(city);

        var temp = document.createElement("p");
        temp.textContent = "Temp:" + data.main.temp + "°F";
        resultsContainer.append(temp);

        var humidity = document.createElement("p");
        humidity.textContent = "Humidity:" + data.main.humidity + "%";
        resultsContainer.append(humidity);

        var wind = document.createElement("p");
        wind.textContent = "Wind:" + data.weather.wind + "MPH";
        resultsContainer.append(wind);


        localStorage.setItem("city", city);
        localStorage.setItem("Temp", temp)
        localStorage.setItem("Wind", wind)
        localStorage.setItem("Humidity", humidity)

      
      });
  }
  renderWeather()
});

var dateValue = new Date(); {
var dd = String(dateValue.getDate()).padStart(2, '0');
var mm = String(dateValue.getMonth() + 1).padStart(2, '0'); 
var yyyy = dateValue.getFullYear();

dateValue = mm + '/' + dd + '/' + yyyy;
document.write("Current Date in your City is "+ dateValue);
}


localStorage.setItem("city", city);
localStorage.setItem("weather", weather)