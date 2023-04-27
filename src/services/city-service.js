const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityService = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityService.createCity({ name: data.name });
      return city;
    } catch (error) {
      console.log("Something wrong at service layer");
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      await this.cityService.deleteCity(cityId);
    } catch (error) {
      console.log("Something wrong at service layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityService.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something wrong at service layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityService.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something wrong at service layer");
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      const cities = await this.cityService.getAllCities({
        name: filter.name,
      });
      return cities;
    } catch (error) {
      console.log("Something wrong at service layer");
      throw { error };
    }
  }

  async bulkCreateCities(data) {
    try {
      const cities = await this.cityService.bulkCreateCities({
        cities: data.cities,
      });
      return cities;
    } catch (error) {
      console.log("Something wrong in service layer");
      throw { error };
    }
  }
}

module.exports = CityService;
