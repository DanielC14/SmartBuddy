const express = require('express'),
    AnimalController = require('./AnimalController');
let router = express.Router();

router.route('/')
    .delete(AnimalController.delete)
    .post(AnimalController.add)
    .get(AnimalController.get);

router.route('/:animal_id')
    .put(AnimalController.put)
    .get(AnimalController.getById);

module.exports = router;
