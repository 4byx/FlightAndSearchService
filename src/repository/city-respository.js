const { City } = require("../models/index");
const { Op } = require("sequelize");

// CRUD
class CityRespository {
  async createCity({ name }) {
    try {
      const city = await City.create({
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
        returning: true,
        plain: true,
      });
      return city;
    } catch (err) {
      console.log("Some error in the repository layer");
      throw { err };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (err) {
      console.log("Some error in the repository layer");
      throw { err };
    }
  }

  async getAllCities(filter) {
    try {
      if (filter.name) {
        const citi = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return citi;
      }
      const cities = await City.findAll();
      // console.log(cities);
      return cities;
    } catch (error) {
      console.log("Some error in the repository layer");
      throw { err };
    }
  }
}

module.exports = CityRespository;
