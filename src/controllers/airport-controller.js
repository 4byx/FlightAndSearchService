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

const update = async (req, res) => {
  try {
    const data = await airportService.updateAirport(req.body, req.params.id);
    return res.status(201).json({
      data: data,
      success: true,
      message: "Successfully updated the airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to update the airport",
      err: error,
    });
  }
};

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

const get = async (req, res) => {
  try {
    const airport = await airportService.getAirport(req.params.id);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully fetched the airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to fetch the airport",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const aiports = await airportService.getAll();
    return res.status(201).json({
      data: aiports,
      success: true,
      message: "Successfully fetched all the airports",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to fetchded all the airport",
      err: error,
    });
  }
};

const bulkCreate = async (req, res) => {
  try {
    const aiports = await airportService.bulkCreate(req.body);
    return res.status(201).json({
      data: aiports,
      success: true,
      message: "Successfully bulk created the airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to bulk create the airports",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
  getAll,
  bulkCreate,
};
