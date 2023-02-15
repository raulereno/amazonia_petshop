const { Router } = require("express");
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const route = Router();

route.get("/", async (req, res) => {
  try {
    const result = await getAllUsers();
    res.send({ status: "success", payload: result });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});

route.post("/", async (req, res) => {
  try {
    const result = await createUser(req.body);
    res.send({ status: "success", payload: result });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});

route.put("/updateUser/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await updateUser(id, req.body);
    res.send({ status: "success", payload: result });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});

route.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteUser(id);
    res.send({ status: "success", payload: result });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});

module.exports = route;
