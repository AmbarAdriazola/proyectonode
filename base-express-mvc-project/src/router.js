const express = require('express')
const PageController = require('./controllers/PageController')
const InterestController = require('./controllers/interestController')


const router = express.Router()

// Controllers
const pageController = new PageController()
const interestController = new InterestController()

// Routes
router.get('/', pageController.renderHome)


router.get('/interestCalculation', interestController.renderinterestCalculation)
router.post('/resultInterest', interestController.renderResulInterest)

router.get('*', pageController.renderNotFound)

module.exports = router
