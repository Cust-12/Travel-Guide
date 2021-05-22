const weatherSettings = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherapi-com.p.rapidapi.com/history.json?q=london&dt=2021-05-15",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "694e83f0e5mshb9d3acb9f58d55ep1ddfeajsn95d58f0c15a1",
		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
	}
};

//fucntion called from main html file
function queryWeatherHistory() {
    var city = document.getElementById("city").value	//get inputted value from main
    var date = document.getElementById("chosenDate").value	//get chosen date from main
    weatherSettings.url = 'https://weatherapi-com.p.rapidapi.com/history.json?q=' + city +'&dt=' + date;	//set url
    $.ajax(weatherSettings).done(function (response) {	//get API information
        var weatherInfo = JSON.stringify(response.forecast.forecastday[0].day,null,2);	//parse from json to string
    	console.log(weatherInfo);	//output to console
    	document.getElementById("weatherInfoBox").innerHTML= "Weather in " + response.location.name  + " on " + response.forecast.forecastday[0].date + "\n" + weatherInfo;	
        return weatherInfo;	//return
    })
    .fail(function(response) {	//if calling API fails
        alert("Please enter a date within the last seven days or choose a different location");
	});
}