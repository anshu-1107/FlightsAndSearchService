const express = require("express");
const cityController = require("../../controllers/city_controller")
const flightController = require("../../controllers/flight_controller")
const airportController = require("../../controllers/airport_controller")
const {FlightMiddlewares} = require("../../middlewares/index")

const router = express.Router();

router.post('/city', cityController.create);
router.delete('/city/:id', cityController.destroy);
router.get('/city/:id', cityController.get);
router.patch('/city/:id',cityController.update);
router.get('/city',cityController.getAll);

router.post(
    '/flight',
    FlightMiddlewares.validateCreateFlight,
    flightController.create
);
router.get('/flight',flightController.getAll); 

router.post('/airport',airportController.create);
router.get('/airport/:id',airportController.get);
router.delete('/airport/:id',airportController.destroy);
router.patch('/airport/:id',airportController.update);
router.get('/airport',airportController.getAll);

module.exports = router;