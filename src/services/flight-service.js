const { FlightRepository, AirplaneRepository } = require("../repository/index");

const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departuretime)) {
        throw { error: "The arrival time is before departure time" };
      }
      // any business logic we can do here like 195 to be booked out of 200
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      // console.log(airplane);
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("something wrong at service layer");
      throw { error };
    }
  }

  async getAllFlightData(data) {
    try {
      const flights = await this.flightRepository.getAllFlightData(data);
      return flights;
    } catch (error) {
      console.log("something wrong at service layer");
      throw { error };
    }
  }
}

module.exports = FlightService;
