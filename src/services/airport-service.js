const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.airportService = new AirportRepository();
  }

  async createAirport(data) {
    try {
      const airport = await this.airportService.createAirport({
        name: data.name,
        address: data.address,
        cityId: data.cityId,
      });
      return airport;
    } catch (error) {
      console.log("Something wrong at service layer");
      throw { error };
    }
  }

  async updateAirport(data, airportId) {
    try {
      const airport = await this.airportService.updateAirport(
        {
          name: data.name,
          address: data.address,
        },
        airportId
      );
      return airport;
    } catch (error) {
      console.log("something wrong at service layer");
      throw { error };
    }
  }

  async deleteAirport(airportId) {
    try {
      await this.airportService.deleteAirport(airportId);
      return true;
    } catch (error) {
      console.log("something wrong at service layer");
      throw { error };
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await this.airportService.getAirport(airportId);
      return airport;
    } catch (error) {
      console.log("something wrong at service layer");
      throw { error };
    }
  }

  async bulkCreateAirports(data) {
    try {
      const airport = await this.airportService.getBulkAirports();
      return airport;
    } catch (error) {
      console.log("something wrong at service layer");
      throw { error };
    }
  }

  async getAll() {
    try {
      const airports = await this.airportService.getAll(data);
      return airports;
    } catch (error) {
      console.log("Something wrong at service layer");
      throw { error };
    }
  }
}

module.exports = AirportService;
