https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

$(function(){
    var array = [];
    $('searchBtn').on('click', function(e){
       e.preventDefault();
       array.push($('search').val());
       $('search').val('');
       $('results').val(array);
    });
 });