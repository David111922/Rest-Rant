/// Modules and Globals
require('dotenv').config()
const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true, 
//   useUnifiedTopology: true
// })

// module.exports.Place
//  = require('./places')

const express = require('express')
const methodOverride = require('method-override')

const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)




// require('dotenv').config()
// const express = require('express')
// const app = express()

// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())

// app.use('/places', require('./controllers/places'))

// app.get('/', (req, res) => {
//   res.render('home')
// })

// app.get('*', (req, res) => {
//   res.status(404).render('error404') 
// })

// app.listen(process.env.PORT)
