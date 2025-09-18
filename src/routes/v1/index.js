const express = require("express");
const cityController = require("../../controllers/city_controller")
const flightController = require("../../controllers/flight_controller")

const router = express.Router();

router.post('/city', cityController.create);
router.delete('/city/:id', cityController.destroy);
router.get('/city/:id', cityController.get);
router.patch('/city/:id',cityController.update)
router.get('/city',cityController.getAll)

router.post('/flight',flightController.create)
router.get('/flight',flightController.getAll)

module.exports = router;