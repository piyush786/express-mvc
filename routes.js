var express = require('express')
var router = express.Router()

// import controllers
var homeCtrl = require('./controllers/home');


// routes
router.get('/', homeCtrl.showWorking );


module.exports = router