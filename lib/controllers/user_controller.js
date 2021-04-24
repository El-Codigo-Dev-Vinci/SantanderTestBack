import User from '../models/user';

export const index = async (req, res) => {
  const data = await User.findAll();
  res.json({ data });
};

export const getById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    res.json({ data: user });
  } else {
    res
      .status(404)
      .json({ message: `No se encontró un usuario con id ${req.params.id}` });
  }
};

export const register = async (req, res) => {
  const user = req.body;

  if (!user) {
    return res.status(404).json({ message: `Can't create new user.` });
  }

  await User.create(user);
  res.json({ data: user });
};

export const login = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({ message: `User is not register.` });
  }

  res.json({ data: user });
};

export const deleteById = async (req, res) => {
  const { id } = req.params;
  const data = await User.destroy({
    where: {
      id: id,
    },
  });

  if (!data) {
    return res
      .status(404)
      .send({ error: `Cannot find the meetup with id:  ${id}` });
  }

  res.json({ data: data });
};
