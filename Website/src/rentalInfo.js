const rentalSettings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hotels4.p.rapidapi.com/locations/search?query=portland&locale=en_US",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "694e83f0e5mshb9d3acb9f58d55ep1ddfeajsn95d58f0c15a1",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
};
//function called from main html
function queryRentals() {
    var city = document.getElementById("city").value	//get inputted text from main
    rentalSettings.url = 'https://hotels4.p.rapidapi.com/locations/search?query=' + city,
    $.ajax(rentalSettings).done(function (response) {	//get API info
        var hotelinfo = JSON.stringify(response.suggestions[1].entities,null,2);	//parse json file to string 
    	console.log(hotelinfo);	//output to console
    	document.getElementById("rentalInfoBox").innerHTML= "List of Available Hotels:\n" + hotelinfo;	//output to webpage
        return hotelinfo;
    })
    .fail(function(response) {	//if calling API fails
        alert("Please enter a city");
	});
}