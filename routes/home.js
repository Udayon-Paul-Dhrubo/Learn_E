const express = require('express');

const homeController = require('../controllers/home')


//const router = express.Router()
const router = require('express-promise-router')()

router.get('/', homeController.getHome)

router.post('/search/:START', homeController.postSearch)

router.get('/about', homeController.getAbout)










module.exports = router