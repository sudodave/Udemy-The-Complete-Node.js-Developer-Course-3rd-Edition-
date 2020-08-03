const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'David Dunn'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'David Dunn'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'David Dunn',
        message: 'If you need help unplug your computer and wait 5 minutes.'
    })
})


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia',
        address: req.query.address
    })
})

// Goal: Update weather endpoint to accept address
//
// 1. No Address? Send back an error message
// 2. Address? Send back the static JSON
//      - Add address property onto JSON which returns the provided address
// 3. Test /weather and /weather?address=philadelphia


app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        products: [],
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 Help',
        name: 'David Dunn',
        errorMessage: 'Help article not found'
    })
})


app.get('*', (req, res) => {
    res.render('404', {
        title: '404 Error',
        name: 'David Dunn',
        errorMessage: 'Page not found'
    })
})

//
// Goal: Create and render a 404 page with handlebars
//
// 1. Setup the template to render the header and footer
// 2. Setup the template to render an error message in a paragraph
// 3. Render the template for both 404 routes
//      - Page not found
//      - Help article not found.
// 4. Test your work. Vist /what and /help/units

const port = 3000

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})