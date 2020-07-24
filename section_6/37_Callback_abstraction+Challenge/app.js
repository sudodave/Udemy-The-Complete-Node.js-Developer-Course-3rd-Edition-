const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


forecast(50.0730, 8.1942, (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})


geocode('New York', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})