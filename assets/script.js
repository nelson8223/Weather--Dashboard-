var button = document.querySelector(".button");
var inputValue = document.querySelector("#inputValue");
var resultsContainer = document.querySelector("#weather-results");
var city = document.createElement("h3");
var dateValue= document.getElementById("#currentToday")
resultsContainer.append(city);


function getWeather() {}

button.addEventListener("click", function (event) {
  event.preventDefault;
  // console.log(inputValue.value);
  var city = inputValue.value;

  function renderWeather(weather) {
    // console.log(weather);
   // Pulling the same day Weather forecast API.
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=65ea356fac868b7989b751cef0bfce08&units=imperial"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        

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
        wind.textContent = "Wind Speed:" + data.weather.wind + "MPH";
        resultsContainer.append(wind);


        localStorage.setItem("city", city);
        localStorage.setItem("Temp", temp)
        localStorage.setItem("Wind", wind)
        localStorage.setItem("Humidity", humidity)

      dailyWeather(data)
      });
  }
function dailyWeather(forecast){
console.log(forecast)
var lat=forecast.coord.lat
console.log(lat,"hey")
var lon=forecast.coord.lon

fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon  
 + "&appid=65ea356fac868b7989b751cef0bfce08&units=imperial")
 .then((response) => response.json())
 .then((data) => {
console.log(data,"sec fetch")


console.log(temp)
const forecastBox = document.getElementById("weather1")
forecastBox.innerHTML= ""
for (let i = 0; i < 5; i++) {
  var temp = data.list[i].main.temp
  console.log(temp,"hello world")
 const tempEl = document.createElement("p")
//  tempEl.textContent = temp
 forecastBox.appendChild(tempEl)

 const dateEl = document.createElement("p")
 dateEl.textContent = data.list[i].dt_txt.substring(0,10)+":"; 

  var tempE1 = document.createElement("p");
 tempE1.textContent= data.list[i].main.temp + "°F";"fa-sharp fa-solid fa-sun-cloud"
//  tempE1.classList.add("test")
  

const dailyBox = document.createElement("div")
dailyBox.setAttribute("class", "test")
forecastBox.append(tempE1)

 dailyBox.append(dateEl);
 dailyBox.append(tempE1);

 forecastBox.append(dailyBox)


}
 }) 
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