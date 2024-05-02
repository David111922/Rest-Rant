const router = require('express') .Router()
router.get('/', (req, res) => {
    res.send('Get Places')
})


module.exports = router