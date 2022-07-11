var searchInput = $("#searchInput").val();
var searchButton = $("#searchBtn");





// Function to get coordinates from searching city to use for onecall API upon clicking search button
searchButton.on('click', function(event){
    event.preventDefault();
    var searchInput = $("#searchInput").val();
    // saveHistory(searchInput);

    var APIkey = "fae5cbeb697eb07543a4f8be8eb78202";

    var APIurl = "https://api.openweathermap.org/data/2.5/weather?q="+searchInput+"&appid="+APIkey;
    fetch(APIurl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data);
        todayWeather(data);
        todayUV(data);
        
        var todayCity = $("#todayCity");
        todayCity.text(data.name +" "+ moment().format('DD/MM/YYYY'));
    });
});

function todayWeather(data){
    var lat = data.coord.lat;
    var lon = data.coord.lon;
    var APIkey = "fae5cbeb697eb07543a4f8be8eb78202";
    var todayURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&appid="+APIkey+"&units=metric";
    fetch(todayURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data);

    var todayTemp = $("#todayTemp");
    var todayWind = $("#todayWind");
    var todayHumidity = $("#todayHumidity");

    var todayIcon = document.createElement("img");
    todayIcon.src = 'http://openweathermap.org/img/wn/' + data.current.weather[0].icon + '@2x.png'
    $("#todayCity").append(todayIcon);
    
    todayTemp.text("Temp: " + data.current.temp +"°C");
    todayWind.text("Wind: " + data.current.wind_speed + " KMH");
    todayHumidity.text("Humidity: " + data.current.humidity + "%");

    $(".forecastHeader").text("5 Day Forecast:");

    for(i = 0; i < 5; i++){
        var forecast = $("#day"+i);

        forecast.children('.date').text(moment().add(1, 'days').format('DD/MM/YYYY'));
        forecast.children('img').attr('src', 'http://openweathermap.org/img/wn/' + data.daily[i].weather[0].icon + '@2x.png');
        forecast.children('.temp').text(data.daily[i].temp.max + "°C");
        forecast.children('.wind').text(data.daily[i].wind_speed + " KPH");
        forecast.children('.humidity').text(data.daily[i].humidity + "%");

    };

    });

};

// function to retrieve UV index and write to html
function todayUV(data){
    var lat = data.coord.lat;
    var lon = data.coord.lon;


    var uvURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=fae5cbeb697eb07543a4f8be8eb78202&cnt=1";

    fetch(uvURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        var todayUV = $("#todayUV");
        todayUV.text("UV Index: " + data[0].value);
    });
};

// Saves Search to local storage
// function saveHistory(search){
//     localStorage.setItem('searchHistory', JSON.stringify(search));    
// };