const express = require('express'),
ObjectController = require('./ObjectController');

let router = express.Router();

router.route('/')
    .get(ObjectController.get);

module.exports = router;
