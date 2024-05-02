
// const express = require('express')
// const app =express()

// app.get('/', (req, send('Hello world!')
// })
require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places, require'('./controller/places'))

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('*,', (require, res) => {
    res.status(404) .send('<h1>404 Page</h1>')

})

app.listen(process.env.PORT)