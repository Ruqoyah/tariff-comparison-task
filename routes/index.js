const express = require("express");
const ProductContoller = require("../services/ProductContoller");

const app = express();

app.get("/api/products/:consumption", ProductContoller.getProducts);

module.exports = app;
