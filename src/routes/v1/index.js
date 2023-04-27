const express = require("express");
const CityController = require("../../controllers/city-controller");
const router = express.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAllCities);
router.patch("/city/:id", CityController.update);
router.post("/city/bulk", CityController.bulkCreate);

module.exports = router;
