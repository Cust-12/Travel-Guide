const holidaySetting = {
    "async": true,
	"crossDomain": true,
	"url": "https://public-holiday.p.rapidapi.com/2019/US",
	"dataType": 'JSON',
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "694e83f0e5mshb9d3acb9f58d55ep1ddfeajsn95d58f0c15a1",
		"x-rapidapi-host": "public-holiday.p.rapidapi.com"
    }
}
//function called from main html
function queryHolidays(){
    var year = document.getElementById("year").value;	//get selected year from main
    var countryCode = document.getElementById("country").value;	//get country chosen from main
    holidaySetting.url = "https://public-holiday.p.rapidapi.com/"+ year + "/" + countryCode;	//set URL
    $.ajax(holidaySetting).done(function(response) {	//get API info
    	var holidayInfo = JSON.stringify(response,null,2);	//parse from json to string
    	console.log(holidayInfo);	//output to console
		//output to webpage
    	document.getElementById("publicHolidaysBox").innerHTML= "List of Public Holidays:\n" + holidayInfo;
        return holidayInfo;
    }).fail(function(response) {	//if calling API fails
        alert("Please enter the correct country code and year");
	});
}