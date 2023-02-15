require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const usersRoute = require("./routes/user.route");
const productsRoute = require("./routes/products.route");
const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(express.urlencoded({ extended: true }));
server.use("/users", usersRoute);
server.use("/products", productsRoute);

server.get("/", (req, res) => {
  res.json("hola wacho");
});

module.exports = server;
