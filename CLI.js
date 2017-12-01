// install required
var weather = require('weather-js');
var axios = require('axios');
var fs = require('fs');
var userType = process.argv[2];
// create user and admin on process.argv[2]
var userSearch = function(name, location) {
    this.name = name;
    this.location = location; 
    this.date = Date.now();

    this.getWeather = function() {
        weather.find({search: this.location, defreeType: "C"}, function(err, result){
            if(err) console.log(err);

            console.log(JSON.stringify(result, null, 2));
        });
    }
}



// create method for admin to request list of past searches

// implement logic for user search