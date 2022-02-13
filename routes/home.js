const express = require('express');

const homeController = require('../controllers/home')


//const router = express.Router()
const router = require('express-promise-router')()

router.get('/', homeController.getHome)
router.post('/', homeController.postSearch)

router.get('/about', homeController.getAbout)

router.get('/')









module.exports = router