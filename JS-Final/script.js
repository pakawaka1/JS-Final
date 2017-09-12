$(document).ready(function(){
//   //retrieve our location info
//   let locationData = $.get('https://ipapi.co/json/');
//   console.log(locationData);


//   //Make sure to declare variables to store data

// locationData.then(function(locationAPI, status){
//     console.log(locationAPI);

    let lat = 36.8252;                   // locationAPI.latitude;
    let lon = 119.7029;                    //locationAPI.longitude;
    let city = 'Clovis';                      //locationAPI.city;
    let state = 'CA';                          //locationAPI.region;
    console.log(`The longtitude is: ${lat}`);

    getWeatherData(lat, lon, city, state);
 // });

    // Declare location variables (lat, lon, city, state) then activate api call


  function getWeatherData(lat, lon, city, state) {
    var weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?';
    var apiKEY = '016210b83b3f19c847f70c14aed332a0';

    var weatherData = $.getJSON(`${weatherAPI}lat=${lat}&lon=${lon}&APPID=${apiKEY}`);

    weatherData.then(function(response, status){
      // Insert your data into the html! hint: log the api response and see what data is available.
      console.log(response);
    });
   }

});
