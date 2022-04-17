var savedLocations = [];
var apiKey = "09269494a244652fb1b3f68c87206dae";
// set the default location.
var searchLocation = "Mankato";
var locationLat = "";
var locationLon = "";
var weatherLocation = "";
var uvi ="";
var weatherHistory = document.querySelector(".history");
// 5 day forcast
var getForecast = function() {
    // day 1 var
    var day1DateEl = document.querySelector(".day1");
    var day1img = document.querySelector(".imgD1");
    var tempDay1 = document.querySelector(".tempD1");
    var windDay1 = document.querySelector(".windD1");
    var humidityDay1 = document.querySelector(".humidityD1");
    // day 2 var
    var day2DateEl = document.querySelector(".day2");
    var day2img = document.querySelector(".imgD2");
    var tempDay2 = document.querySelector(".tempD2");
    var windDay2 = document.querySelector(".windD2");
    var humidityDay2 = document.querySelector(".humidityD2");
    // day 3 var
    var day3DateEl = document.querySelector(".day3");
    var day3img = document.querySelector(".imgD3");
    var tempDay3 = document.querySelector(".tempD3");
    var windDay3 = document.querySelector(".windD3");
    var humidityDay3 = document.querySelector(".humidityD3");
    // day 4 var
    var day4DateEl = document.querySelector(".day4");
    var day4img = document.querySelector(".imgD4");
    var tempDay4 = document.querySelector(".tempD4");
    var windDay4 = document.querySelector(".windD4");
    var humidityDay4 = document.querySelector(".humidityD4");
    // day 5 var
    var day5DateEl = document.querySelector(".day5");
    var day5img = document.querySelector(".imgD5");
    var tempDay5 = document.querySelector(".tempD5");
    var windDay5 = document.querySelector(".windD5");
    var humidityDay5 = document.querySelector(".humidityD5");
    // connects to forcast api to collect data
    var apiUrlForcast = "https://api.openweathermap.org/data/2.5/forecast?lat="+ locationLat +"&lon="+ locationLon +"&appid=" + apiKey;
    fetch(apiUrlForcast).then(function(responce) {
        responce.json().then(function(dataforecast) {   
            
            // Day 1 of the 5 day forecast
            
            var day1Date=new Date(dataforecast.list[4].dt*1000);  
            var weatherIconD1 = dataforecast.list[4].weather[0].icon;
            var descriptionD1 = dataforecast.list[4].weather[0].description;
            var imgDay1 =  "http://openweathermap.org/img/wn/"+ weatherIconD1 +"@2x.png";
            var tempD1 = Math.trunc(((dataforecast.list[4].main.temp - 273.15)*1.8)+ 32);
            var windSpeedD1 = dataforecast.list[4].wind.speed;
            var humidityD1 = dataforecast.list[4].main.humidity;
            day1Date = (day1Date.toDateString()); 
            // displays data in to correct date on index.html
            day1DateEl.innerHTML = day1Date;
            day1img.innerHTML = "<img src='" +imgDay1 + "' alt= '"+ descriptionD1 +"'>";
            tempDay1.innerHTML = "Temp: " + tempD1 + "F";
            windDay1.innerHTML = "Wind: " + windSpeedD1 + " MPH";
            humidityDay1.innerHTML = "Humidity: " + humidityD1 + "%";

            // Day 2 of the 5 day forecast
            var day2Date=new Date(dataforecast.list[11].dt*1000);  
            day2Date = (day2Date.toDateString());
            var weatherIconD2 = dataforecast.list[11].weather[0].icon;
            var descriptionD2 = dataforecast.list[11].weather[0].description;
            var imgDay2 =  "http://openweathermap.org/img/wn/"+ weatherIconD2 +"@2x.png";
            var tempD2 = Math.trunc(((dataforecast.list[11].main.temp - 273.15)*1.8)+ 32);
            var windSpeedD2 = dataforecast.list[11].wind.speed;
            var humidityD2 = dataforecast.list[11].main.humidity;
            // displays data in to correct date on index.html
            day2DateEl.innerHTML = day2Date;
            day2img.innerHTML = "<img src='" +imgDay2 + "' alt= '"+ descriptionD2 +"'>";
            tempDay2.innerHTML = "Temp: " + tempD2 + "F";
            windDay2.innerHTML = "Wind: " + windSpeedD2 + " MPH";
            humidityDay2.innerHTML = "Humidity: " + humidityD2 + "%";
            

            // Day 3 of the 5 day forecast
            var day3Date=new Date(dataforecast.list[19].dt*1000);  
            day3Date = (day3Date.toDateString());
            var weatherIconD3 = dataforecast.list[19].weather[0].icon;
            var descriptionD3 = dataforecast.list[19].weather[0].description;
            var imgDay3 =  "http://openweathermap.org/img/wn/"+ weatherIconD3 +"@2x.png";
            var tempD3 = Math.trunc(((dataforecast.list[19].main.temp - 273.15)*1.8)+ 32);
            var windSpeedD3 = dataforecast.list[19].wind.speed;
            var humidityD3 = dataforecast.list[19].main.humidity;
            // displays data in to correct date on index.html
            day3DateEl.innerHTML = day3Date;
            day3img.innerHTML = "<img src='" +imgDay3 + "' alt= '"+ descriptionD3 +"'>";
            tempDay3.innerHTML = "Temp: " + tempD3 + "F";
            windDay3.innerHTML = "Wind: " + windSpeedD3 + " MPH";
            humidityDay3.innerHTML = "Humidity: " + humidityD3 + "%";

            // Day 4 of the 5 day forecast
            var day4Date=new Date(dataforecast.list[30].dt*1000);  
            day4Date = (day4Date.toDateString());
            var weatherIconD4 = dataforecast.list[30].weather[0].icon;
            var descriptionD4 = dataforecast.list[30].weather[0].description;
            var imgDay4 =  "http://openweathermap.org/img/wn/"+ weatherIconD4 +"@2x.png";
            var tempD4 = Math.trunc(((dataforecast.list[30].main.temp - 273.15)*1.8)+ 32);
            var windSpeedD4 = dataforecast.list[30].wind.speed;
            var humidityD4 = dataforecast.list[30].main.humidity;
            // displays data in to correct date on index.html
            day4DateEl.innerHTML = day4Date;
            day4img.innerHTML = "<img src='" +imgDay4 + "' alt= '"+ descriptionD4 +"'>";
            tempDay4.innerHTML = "Temp: " + tempD4 + "F";
            windDay4.innerHTML = "Wind: " + windSpeedD4 + " MPH";
            humidityDay4.innerHTML = "Humidity: " + humidityD4 + "%";

            // Day 5 of the 5 day forecast
            var day5Date=new Date(dataforecast.list[39].dt*1000);  
            day5Date = (day5Date.toDateString());
            var weatherIconD5 = dataforecast.list[39].weather[0].icon;
            var descriptionD5 = dataforecast.list[39].weather[0].description;
            var imgDay5 =  "http://openweathermap.org/img/wn/"+ weatherIconD5 +"@2x.png";
            var tempD5 = Math.trunc(((dataforecast.list[39].main.temp - 273.15)*1.8)+ 32);
            var windSpeedD5 = dataforecast.list[39].wind.speed;
            var humidityD5 = dataforecast.list[39].main.humidity;
            // displays data in to correct date on index.html
            day5DateEl.innerHTML = day5Date;
            day5img.innerHTML = "<img src='" +imgDay5 + "' alt= '"+ descriptionD5 +"'>";
            tempDay5.innerHTML = "Temp: " + tempD5 + "F";
            windDay5.innerHTML = "Wind: " + windSpeedD5 + " MPH";
            humidityDay5.innerHTML = "Humidity: " + humidityD5 + "%";
        });
    });
};    


// gets the current weather
var getCurrentWeather = function() {
    var tempEl = document.querySelector(".temp");
    var windEl = document.querySelector(".wind");
    var humidityEl = document.querySelector(".humidity");
    var loctionEl = document.querySelector(".location");
    var uviEl = document.querySelector(".uv");

    // format the open weather api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+ locationLat +"&lon="+ locationLon +"&appid=" + apiKey;
    fetch(apiUrl).then(function(responce) {
        responce.json().then(function(data) {
            // convert form kelvin to fahernheit
            var tempF = Math.trunc(((data.current.temp - 273.15)*1.8)+ 32);
            var windSpeed = data.current.wind_speed;
            var humidity = data.current.humidity;
            var weatherIcon = data.current.weather[0].icon;
            var uvi = data.current.uvi;
            //sets the color for UV index
            if(uvi < 3) {
                var UVScale = "uvLow";
            } else if (uvi > 2.9 && uvi <6){
                var UVScale = "uvModerate";
            } else if (uvi > 5.9 && uvi <8){
                var UVScale = "uvHigh";
            } else if (uvi > 7.9 && uvi <11){
                var UVScale = "uvVhigh";
            } else {
                var UVScale = "uvExtreme";
            };
            var currentDate = moment().format('L');
            var img =  "http://openweathermap.org/img/wn/"+ weatherIcon +"@2x.png";
            // displays data on page
            loctionEl.innerHTML = weatherLocation +" ("+currentDate+") <img src ='" + img + "' width= '60px'>";
            tempEl.innerHTML = "Temp: " + tempF + "F";
            windEl.innerHTML = "Wind: " + windSpeed + " MPH";
            humidityEl.innerHTML = "Humidity: " + humidity + "%";
            uviEl.innerHTML = "UV Index:  <span class="+ UVScale +" id='uv'> " + uvi + " </span>";
        });
    });
};


// gets lat and lon based off of searched name
var getLocation = function() {
   var locationApi = "https://api.openweathermap.org/geo/1.0/direct?q="+ searchLocation +"&limit=1&appid="+ apiKey;

    fetch(locationApi).then(function(responce) {
        responce.json().then(function(locationData) {  
            locationLat = locationData[0].lat;
            locationLon = locationData[0].lon;
            weatherLocation = locationData[0].name + ", " +locationData[0].state;
            savedLocations.push({weatherLocation});
            // saveLocation();
            locationCheck(); 
            getCurrentWeather();
            getForecast();  
        });
    });  
}
// checks to see if location is already being stored
var locationCheck = function(){
    var match = "no";
    checkedLocations = JSON.parse(localStorage.getItem("Locations"));
    if (!checkedLocations){
        saveLocation();
    }
    else {
        for (var i = 0; i<checkedLocations.length; i++) {
            console.log(weatherLocation , checkedLocations[i].weatherLocation);
            if (checkedLocations[i].weatherLocation === weatherLocation){
                match = "yes";
                console.log("Match")
                break;
            };
        }  
        if ( match == "no"){
            console.log("No Match")
            saveLocation();
        };
    };    
}
// gets the location that was entered in the search
var getSearchLocation = function(event){
    event.preventDefault();
    searchLocation = document.querySelector("input[name='citySearch']").value;
    getLocation();
};
// gets location from search history button and displays current info
var getSearchHistoryLocation = function(event){
    event.preventDefault();
    searchLocation = document.querySelector("submit").value;
    getLocation();
}
// saves to localstorage
var saveLocation = function() {
    localStorage.setItem("Locations", JSON.stringify(savedLocations));
    loadLocations();
};
// gets recent searches from localstorage
var loadLocations = function() {
    savedLocations = JSON.parse(localStorage.getItem("Locations"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!savedLocations) {
        savedLocations = [];
    }
 
    for (i=0; i < savedLocations.length; i++) {
        $(weatherHistory).append (
            "<button type='submit' class='btn btn-primary btn-history' value = " + savedLocations[i].weatherLocation + ">"+ savedLocations[i].weatherLocation +"</button><br/>"
        );
    };
};

loadLocations();
getLocation();
var searchForm = document.querySelector("#citySearchForm");
var historySearch = document.querySelector("#history");
searchForm.addEventListener("submit", getSearchLocation);
historySearch.addEventListener("click", getSearchHistoryLocation);
