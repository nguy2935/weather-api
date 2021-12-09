// weather api 
var appID = 'b002b3316d73d825f3942e6f84e94112';
// var cityKey = api.openweathermap.org/data/2.5/weather?q={city name}&appid=b002b3316d73d825f3942e6f84e94112;

// var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityID;
var cityID = '';
var getCityWeather = function(parameter) {
   cityID = $('.searchBar').val();
   var url = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + cityID + "&appid=" + appID;

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

     var urlUI = `https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=${cityTemp.lat}&lon=${cityTemp.lon}&appid=${appID}`;
     $.getJSON( urlUI, function(data) {
        console.log(data);
   
     }).done(function(data) {
      cityTemp['uv'] = data.current.uvi;
      console.log(cityTemp);
      $('.citySearch').html(cityTemp.name);
      $('.temp strong').html(cityTemp.temp + ' °F');
      $('.windspeed strong').html(cityTemp.windspeed + ' MPH');
      $('.humidity strong').html(cityTemp.humidity + '%');
      $('.uvi span').html(cityTemp.uv)

      $('.fiveDisplay').each(function(i){
         i++;
         console.log(data.daily[i].humidity);
         var forecastDate = new Date(data.daily[i].dt * 1000);
         $(this).find('.date strong').html(forecastDate.toLocaleDateString("en-US"));
         $(this).find('.temp strong').html(data.daily[i].temp.max + ' °F');
         $(this).find('.windspeed strong').html(data.daily[i].wind_speed + ' MPH');
         $(this).find('.humidity strong').html(data.daily[i].humidity + '%');
      });

      $('.currentWeather').show();
      $('.weekForecast').show();
      console.log( "second success" );

     }) 
    });
}

// the click button event listener
$(document).on('click', '.searchBtn', function (event) {
   getCityWeather();
});