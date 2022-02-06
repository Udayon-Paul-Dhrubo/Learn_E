const express = require('express');

const homeController = require('../controllers/home')


//const router = express.Router()
const router = require('express-promise-router')()

router.get('/', homeController.getHome )

//router.get('/category', )

//router.get('/about',)




module.exports = router