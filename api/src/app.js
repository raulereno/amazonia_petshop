const express = require("express");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.send("Nueva app");
});

module.exports = server;
