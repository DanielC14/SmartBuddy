const express = require('express'),
ParkController = require('./ParkController');

let router = express.Router();

router.route('/')
    .get(ParkController.get)
    .post(ParkController.add);

module.exports = router;
