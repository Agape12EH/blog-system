import { User } from "../models/User.js";

const getAll = async (req, res) => {
  const users = await User.findAll();

  return res.json(users);
};

const getOne = async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });

  if (user === null) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.json(user);
};

const create = async (req, res) => {
  // Destructuring body
  const { name, lastname, email } = req.body;

  // validaciones

  // Metodo de Creación
  const newUser = await User.create({
    name,
    lastname,
    email,
  });

  return res.json(newUser);
};

const update = async (req, res) => {
  // Destructuring body
  const { name, lastname, email } = req.body;

  // validaciones

  // Metodo de Creación
  const updateUser = await User.update(
    {
      name,
      lastname,
      email,
    },
    {
      where: { id: req.params.id },
    }
  );

  if (updateUser == false) {
    return res.json({ message: "user not found" });
  }

  return res.json({ message: "user updated successfully" });
};

const destroy = async (req, res) => {
  await User.destroy({
    where: {
      id: req.params.id,
    },
    force: true,
  });

  return res.json({ message: "User deleted successfully" });
};

export { getAll, getOne, create, destroy, update };
