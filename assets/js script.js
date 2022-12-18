var button= document.querySelector('.button')
var inputValue= document.querySelector('.input')
var name = document.querySelector('.temp')
var name = document.querySelector('.humidity')
var name = document.querySelector('.wind')



button.addEventListener('click',function(){
fetch('http://api.openweathermap.org/geo/1.0/zip?zip=E14,GB&appid=65ea356fac868b7989b751cef0bfce08'
)
.then((response) => response.json())
.then((data) => {
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var weatherValue = data['weather'][0]['city'];

    main.innerHTML = nameValue;
  wind.innerHTML = "Wind - "+windValue;
  temp.innerHTML = "Temp - "+tempValue;
  humidity.innerHTML = "Humidity - "+tempValue;
  input.value ="";
})

try {
    
} catch (error) {
    
}(err => alert("Invalid City"))

})


