const express = require('express'),
VetController = require('./VetController');

let router = express.Router();

router.route('/')
    .get(VetController.get);

module.exports = router;
