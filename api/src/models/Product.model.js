const mongoose = require("mongoose");

const productCollection = "products";

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
});

const productModel = mongoose.model(productCollection, productSchema);

module.exports = productModel;
