const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const airport = await airportService.createAirport(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully created the airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to create the airport",
      err: error,
    });
  }
};

const update = async (req, res) => {};

const destroy = async (req, res) => {
  try {
    await airportService.deleteAirport(req.params.id);
    return res.status(201).json({
      data: [],
      success: true,
      message: "Successfully deleted the airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to delete the airport",
      err: error,
    });
  }
};

const get = async (req, res) => {};

const getAll = async (req, res) => {};

const bulkCreate = async (req, res) => {};

module.exports = {
  create,
  destroy,
};
