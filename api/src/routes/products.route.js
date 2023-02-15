const { Router } = require("express");
const {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/products.controller");
const route = Router();

route.get("/", async (req, res) => {
  try {
    const result = await getAllProducts();
    res.send({ status: "success", payload: result });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});
//TODO: Agregar middleware para requerir auntenticacion de admin
route.post("/", async (req, res) => {
  try {
    const result = await createProduct(req.body);
    res.send({ status: "success", payload: result });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});

route.put("/update/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await updateProduct(id, req.body);
    res.send({ status: "success", payload: result });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});

route.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteProduct(id);
    res.send({ status: "success", payload: result });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});

module.exports = route;
