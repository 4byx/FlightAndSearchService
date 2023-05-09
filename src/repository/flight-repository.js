const { Flights } = require("../models");
const { Op } = require("sequelize");
class FlightRepository {
  #createfilter(data) {
    const filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    // if (data.minPrice) {
    //   Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
    // }

    // if (data.maxPrice) {
    //   Object.assign(filter, {
    //     price: { ...filter.price, [Op.lte]: data.maxPrice },
    //   });
    // }

    const priceFilter = [];
    if (data.minPrice) {
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }

    Object.assign(filter, { [Op.and]: priceFilter });
    return filter;
  }
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("something wrong in repository layer");
      throw { error };
    }
  }
  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("something wrong in repository layer");
      throw { error };
    }
  }
  async getAllFlightData(filter) {
    try {
      const filterObject = this.#createfilter(filter);
      console.log(filterObject);
      const flight = await Flights.findAll({
        where: filterObject,
      });
      return flight;
    } catch (error) {
      console.log("something wrong in repository layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
