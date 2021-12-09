// weather api 
var appID = 'b002b3316d73d825f3942e6f84e94112';
// var cityKey = api.openweathermap.org/data/2.5/weather?q={city name}&appid=b002b3316d73d825f3942e6f84e94112;

// var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityID;
var cityID = '';
var getCityWeather = function(parameter) {
   cityID = $('.searchBar').val();
   var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityID + "&appid=" + appID;


   $.getJSON( url, function( data ) {
      console.log(url);
    }).done(function(data) {
      var cityTemp = {
         "name": data.name,
         "temp": data.main.feels_like,
         "windspeed": data.wind.speed,
         "humidity": data.main.humidity,
         "lat": data.coord.lat,
         "lon": data.coord.lon
     }            

     var urlUI = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityTemp.lat}&lon=${cityTemp.lon}&appid=${appID}`;
     $.getJSON( urlUI, function(data) {
        console.log(data);
        cityTemp['uv'] = data.current.uvi;
        console.log(cityTemp);
   
     }) 
     console.log( "second success" );
    });
}


$(document).on('click', '.searchBtn', function (event) {
   getCityWeather();
});

// parameters 
// city.name for City name
// main.temp for temp
// wind.speed for wind speed
// main.humidity for humidity
// 

// UV indexed
// 5-Day Forecast
// Last Searched stuff