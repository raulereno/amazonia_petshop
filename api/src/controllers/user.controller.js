const userModel = require("../models/User.model");

const getAllUsers = async () => {
  const result = await userModel.find();

  if (!result.length) return "No users in database";
  return result;
};

const createUser = async ({ email, password, adress }) => {
  //TODO: Enviar mail de verificación
  //TODO: Hashear contraseña

  if (!email || !password) throw new Error("Fields missing");

  const result = await userModel.create({ email, password, adress });
  return result;
};

const updateUser = async (id, update) => {
  if (!id) throw Error("Id is necesary to update");
  if (!Object.keys(update).length) throw Error("Nothing to update");

  const result = await userModel.updateOne({ _id: id }, update);

  if (!result.matchedCount) throw Error("User with that id not found");

  return result;
};

const deleteUser = async (id) => {
  //TODO: No permitir la eliminacion de un usuario a menos que este logueado con la cuenta a eliminar
  if (!id) throw Error("Id is necesary to delete");

  const result = await userModel.deleteOne({ _id: id });
  if (!result.deletedCount) throw Error("User not eliminated");

  return result;
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
