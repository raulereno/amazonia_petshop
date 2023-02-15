const productModel = require("../models/Product.model");

const getAllProducts = async () => {
  const result = await productModel.find();

  if (!result.length) return "No products in database";
  return result;
};

const createProduct = async (product) => {
  const { title, price, stock, code, description } = product;

  if ((!title, !price, !code, !stock)) throw Error("Fields mising");

  const result = await productModel.create(product);
  console.log(result);
  return result;
};
const updateProduct = async (id, productUpdate) => {
  console.log(productUpdate);
  if (!id) throw Error("Please enter an id");
  if (!Object.keys(productUpdate).length) throw Error("Nothing to update");

  const result = await productModel.updateOne({ _id: id }, productUpdate);

  return result;
};
const deleteProduct = async (id) => {
  if (!id) throw Error("Please enter an id");

  const result = await productModel.deleteOne({ _id: id });

  return result;
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
