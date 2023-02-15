const mongoose = require("mongoose");

const userCollection = "users";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: false,
  },
  verified: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const userModel = mongoose.model(userCollection, userSchema);

module.exports = userModel;
