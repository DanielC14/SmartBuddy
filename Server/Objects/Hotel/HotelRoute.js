const express = require('express'),
HotelController = require('./HotelController');

let router = express.Router();

router.route('/')
    .get(HotelController.get);

module.exports = router;
