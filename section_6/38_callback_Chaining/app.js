const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


//
// Goal: Accept location via command liine argument
//
// 1. Access the command line argument without yargs
// 2. Use the string value as the input for geocode
// 3. Only geocode if a location was provided

const address = process.argv[2]

if (!address) {
    console.log('Please enter an address')
}
else {
    geocode(address, (error, geoData) => {
        if (error) {
            return console.log(error)
        }

        forecast(geoData.latitude, geoData.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }


            console.log(geoData.location)
            console.log(forecastData)
        })
    })
}