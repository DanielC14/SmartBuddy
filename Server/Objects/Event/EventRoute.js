const express = require('express'),
    EventController = require('./EventController');

let router = express.Router();

router.route('/')
    .get(EventController.get)
    .post(EventController.add);

module.exports = router;
