import Assistance from '../models/assistance';
import Meetup from '../models/meetup';
import User from '../models/user';

export const index = async (req, res) => {
  const data = await Assistance.findAll({
    include: [
      {
        model: User,
        attributes: ['id', 'name'],
      },
      {
        model: Meetup,
        attributes: ['id', 'description'],
      },
    ],
  });

  res.send({ data });
};

export const getById = async (req, res) => {
  const { id } = req.params;
  const data = await Assistance.findByPk(id, {
    include: {
      model: Meetup,
      attributes: ['id', 'name', 'descripcion'],
      include: {
        model: User,
        attributes: ['id', 'name'],
      },
    },
  });

  if (!data) {
    return res
      .status(404)
      .send({ error: `There's any Assistance with the id: ${id}` });
  }
  res.send({ data });
};

export const create = async (req, res) => {
  const assistance = req.body;
  const data = await Assistance.create(assistance);
  res.status(201).send({ data });
};

export const deleteById = async (req, res) => {
  const { id } = req.params;
  const data = await Assistance.destroy({
    where: {
      id: id,
    },
  });

  if (!data) {
    return res
      .status(404)
      .send({ error: `Cannot find the meetup with id:  ${id}` });
  }
  res.sendStatus(204);
};
