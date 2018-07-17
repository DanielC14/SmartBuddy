const express = require('express'),
    AnimalController = require('./AnimalController');

let router = express.Router();

router.route('/')
    .post(AnimalController.add)
    .delete(AnimalController.delete)
    .get(AnimalController.get);

module.exports = router;
