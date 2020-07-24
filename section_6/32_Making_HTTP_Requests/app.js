const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=YourAPIKeyGoesHere&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
  const temp = response.body.current.temperature;
  const rain = response.body.current.precip;
  const desc = response.body.current.weather_descriptions;
  console.log(`It is currently ${desc} & ${temp} degrees out. There is a ${rain} chance of rain.`);
})

// Geocoding
// Address -> Lat/Long -> Weather
