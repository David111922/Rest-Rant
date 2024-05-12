const router = require('express').Router();
const places = require('../models/places.js')
router.get('/new', (req, res) => {
  res.render('places/new')
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})



 
  

  res.render('places/index', {places})
})


//  !moved to models/places.js

// module.exports = router = [{
  //     name: 'H-Thai-ML',
  //     city: 'Seattle',
  //     state: 'WA',
  //     cuisines: 'Thai, Pan-Asian',
  //     pic: 'images/Pasta-Alfredo.jpg'
  //   }, {
  //     name: 'Coding Cat Cafe',
  //     city: 'Phoenix',
  //     state: 'AZ',
  //     cuisines: 'Coffee, Bakery',
  //     pic: 'images/pizza.jpg'
  //   }]   

