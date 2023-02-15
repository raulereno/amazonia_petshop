require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const userRoute = require("./routes/user.route");
const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(express.urlencoded({ extended: true }));
server.use("/users", userRoute);

server.get("/", (req, res) => {
  res.json("hola wacho");
});

module.exports = server;
