const express = require("express");
const bodyParser = require("body-parser");

const SetupAndStartServer = async () => {
  const app = express();
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log("server started at port ", PORT);
  });
};

SetupAndStartServer();
