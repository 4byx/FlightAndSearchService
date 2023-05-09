const express = require("express");
const CityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-controller");
const FlightController = require("../../controllers/flight-controller");
const router = express.Router();

// city
router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAllCities);
router.patch("/city/:id", CityController.update);
router.post("/city/bulk", CityController.bulkCreate);

// airport
router.post("/airport", AirportController.create);
router.delete("/airport/:id", AirportController.destroy);
router.get("/airport", AirportController.getAll);
router.get("/airport/:id", AirportController.get);
router.patch("/airport/:id", AirportController.update);
router.post("/airport/bulk", AirportController.bulkCreate);

// router.patch("/airport/:id", AirportController.update);

// flights
router.post("/flights", FlightController.create);
router.get("/flights", FlightController.getAll);

module.exports = router;
