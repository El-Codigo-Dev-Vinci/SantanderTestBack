import Meetup from '../models/meetup';

export const index = async (req, res) => {
  console.log('Hello');
  const data = await Meetup.findAll({});
  res.json({ data });
};

export const getById = async (req, res) => {
  const meet = await Meetup.findByPk(req.params.id);
  if (meet) {
    res.json({ data: meet });
  } else {
    res
      .status(404)
      .json({ message: `Not found meetup with id: ${req.params.id}` });
  }
};

export const create = async (req, res) => {
  const meetup = req.body;

  const data = await Meetup.create(meetup);
  res.status(201).send({ data });
};

export const deleteById = async (req, res) => {
  const { id } = req.params;
  const data = await Meetup.destroy({
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
