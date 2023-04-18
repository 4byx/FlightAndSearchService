const { City } = require("../models/index");

// CRUD
class CityRespository {
  async createCity({ name }) {
    try {
      const city = await City({
        name,
      });
      return city;
    } catch (err) {
      console.log("Some error in the respository layer");
      throw { err };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (err) {
      console.log("Some error in the repository layer");
      throw { err };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (err) {
      console.log("Some error in the repository layer");
      throw { err };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findbyPK(cityId);
      return city;
    } catch (err) {
      console.log("Some error in the repository layer");
      throw { err };
    }
  }
}

module.exports = CityRespository;
