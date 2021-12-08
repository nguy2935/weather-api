// weather api 
var appID = 'b002b3316d73d825f3942e6f84e94112';
// var cityKey = api.openweathermap.org/data/2.5/weather?q={city name}&appid=b002b3316d73d825f3942e6f84e94112;

// var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityID;
var cityID = '';
var getCityWeather = function(parameter) {
   cityID = $('.searchBar').val();
   var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityID + "&appid=" + appID;


   $.getJSON( url, function( data ) {

    });
   console.log(url);
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