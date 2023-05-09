const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      Success: true,
      message: "Flight successfully created",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(201).json({
      data: {},
      Success: false,
      message: "Error in creating Flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flight = await flightService.getAllFlightData(req.query);
    return res.status(201).json({
      data: flight,
      Success: true,
      message: "All Flights are fetched successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(201).json({
      data: {},
      Success: false,
      message: "Error in fetching All Flights",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
};
