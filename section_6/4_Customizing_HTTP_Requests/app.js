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
