const request = require('postman-request')

const forecast = (longitude, latitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=625be09cd9b57716b3feded9656525db&query=${longitude},${latitude}&units=f`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }
        else if (response.body.success === false) {
            callback('Unable to find location', undefined)
        }
        else {
            const temp = response.body.current.temperature;
            const rain = response.body.current.precip;
            const desc = response.body.current.weather_descriptions;
            callback(undefined, `It is currently ${desc} & ${temp} degrees out. There is a ${rain} chance of rain.`);
        }
   })
} 

module.exports = forecast;