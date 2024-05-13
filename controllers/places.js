const router = require('express').Router();
const places = require('../models/places.js')
// router.get('/new', (req, res) => {
//   res.render('places/new')
// })
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')

})



router.get('/new', (req, res) => {
  res.render('places/new')
// })
 
  

  // res.render('places/index', {places})
})
module.exports = router

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

