const express = require("express");
const winston = require("winston");
const dotenv = require("dotenv");
const routes = require("./routes");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(routes);

app.listen(port, () => {
  winston.info(`Connected on port: ${port}`);
});

module.exports = app;
