const request = require('postman-request');

// Goal: Print a small forcast to the user
//
// 1. Print: "It is currently 58.55 degrees out. There is a 0% chance of rain."
// 2. Test your work!

const url = 'http://api.weatherstack.com/current?access_key=625be09cd9b57716b3feded9656525db&qurey='
//& query=37.8267, -122.4233 & units=f
request({ url: url, json: true }, (error, response) => {
    

    if (error) {
        console.log('Unable to connect to weather service');
    }
    else if (response.body.success === false) {
        console.log('Unable to find location');
    }
    else {
    const temp = response.body.current.temperature;
    const rain = response.body.current.precip;
    const desc = response.body.current.weather_descriptions;
        console.log(`It is currently ${desc} & ${temp} degrees out. There is a ${rain} chance of rain.`);
    }
   
})

//
// Goal: Handling errors for geocoding request
//
// 1. Setup an error handler for low-level errors
// 2. Test by disabling network requst and running the app
// 3. Setup error handling for no matching results
// 4. Test by altering the search term and running the app


// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3Vkb2RhdmUwIiwiYSI6ImNrYzdqNGlzbTBsbmgyd254MmV5NzkwOHcifQ.bjyHqGVMlj4emeXoyTHCoQ'

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location service')
    }
    else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search')
    }
    else {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
    }
})