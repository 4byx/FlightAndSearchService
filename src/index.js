const express = require("express");
const bodyParser = require("body-parser");
const CityRespository = require("./repository/city-respository");
const { PORT } = require("./config/serverConfig");

const SetupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(PORT, () => {
    console.log("server started at port ", PORT);
    const repo = new CityRespository();
    repo.createCity({ name: "New Delhi" });
  });
};

SetupAndStartServer();
