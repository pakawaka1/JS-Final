$(document).ready(function(){
//   retrieve our location info
 let locationData = $.get('https://ipapi.co/json/');
  var temp = document.querySelector('.temp');
  var myCity = document.querySelector('.city');
  var myState = document.querySelector('.state');
  var weatherIcon = document.querySelector('.weather-icon');
  console.log(locationData);

//   //Make sure to declare variables to store data
  locationData.then(function(locationAPI, status){
     console.log(locationAPI);

    let lat = locationAPI.latitude;
    let lon = locationAPI.longitude;
    let city = locationAPI.city;
    let state = locationAPI.region;
    console.log(`The longtitude is: ${lat}`);

    getWeatherData(lat, lon, city, state);
  });

    // Declare location variables (lat, lon, city, state) then activate api call


  function getWeatherData(lat, lon, city, state){
    let weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?';
    let apiKEY = '016210b83b3f19c847f70c14aed332a0';
    let weatherData = $.getJSON(`${weatherAPI}lat=${lat}&lon=${lon}&APPID=${apiKEY}`);


    weatherData.then(function(response, status){
      let myTemp = response.main.temp;
      let newCity  = response.name;
      let newState = response.sys.country;
      temp.textContent = Math.round(myTemp);
      myCity.innerHTML = newCity;
      myState.innerHTML = newState;

      // Insert your data into the html! hint: log the api response and see what data is available.
      console.log(response);
    });
  }
});
