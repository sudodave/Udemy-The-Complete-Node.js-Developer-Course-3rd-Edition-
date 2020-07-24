const request = require('postman-request');

// Goal: Print a small forcast to the user
//
// 1. Print: "It is currently 58.55 degrees out. There is a 0% chance of rain."
// 2. Test your work!

const url = 'http://api.weatherstack.com/current?access_key=625be09cd9b57716b3feded9656525db&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
  const temp = response.body.current.temperature;
  const rain = response.body.current.precip;
  const desc = response.body.current.weather_descriptions;
  console.log(`It is currently ${desc} & ${temp} degrees out. There is a ${rain} chance of rain.`);
})

// Geocoding
// Address -> Lat/Long -> Weather

//
// Goal: Print the lat/long for Los Angeles
//
// 1. Fire off a new request to the url expolored in the browser
// 2. Have the request module parse it as JSON
// 3. Print both the latitude and longitude to the terminal
// 4. Test your work!

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3Vkb2RhdmUwIiwiYSI6ImNrYzdqNGlzbTBsbmgyd254MmV5NzkwOHcifQ.bjyHqGVMlj4emeXoyTHCoQ'

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
})