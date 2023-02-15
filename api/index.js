const mongoose = require("mongoose");
const server = require("./src/server");
const PORT = process.env.PORT || 8080;
const STRING_CONNECTION = process.env.STRING_CONNECTION;

mongoose.set("strictQuery", false);

mongoose.connect(STRING_CONNECTION, (error) => {
  if (error) {
    console.log("Cannot connect to database", error);
    process.exit();
  }
});

server.listen(PORT, () => {
  console.log("server on", PORT);
});
