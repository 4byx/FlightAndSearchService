const { Airport } = require("../models/index");

class AirportRepository {
  async createAirport({ name, address, cityId }) {
    try {
      const airport = await Airport.create({
        name,
        address,
        cityId,
      });
      return airport;
    } catch (error) {
      console.log("something wrong in repository layer");
      throw { error };
    }
  }

  async bulkCreateAirports(data) {
    try {
      const airports = await Airport.bulkCreate(data.airports);
      return airports;
    } catch (error) {
      console.log("something wrong in repository layer");
      throw { error };
    }
  }

  async deleteAirport(airportId) {
    try {
      await Airport.destroy({
        where: {
          id: airportId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something wrong in repository layer");
      throw { error };
    }
  }

  async updateAirport(data, airportId) {
    try {
      const airport = await Airport.update(data, {
        where: {
          id: airportId,
        },
      });
      return airport;
    } catch (error) {
      console.log("something wrong in repository layer");
      throw { error };
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await Airport.findByPk(airportId);
      return airport;
    } catch (error) {
      console.log("something wrong at repository layer");
      throw { error };
    }
  }

  async getAll() {
    try {
      const airports = await Airport.findAll();
      return airports;
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw { error };
    }
  }
}

module.exports = AirportRepository;
