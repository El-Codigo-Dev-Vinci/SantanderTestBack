import Meetup from '../models/meetup';
import { getTemperature } from '../helpers/temperaturesHelper';
import Assistance from '../models/assistance';
export const index = async (req, res) => {
  const data = await Meetup.withAssistances();
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
  const temperature = await getTemperature(meetup.date);

  const data = await Meetup.create({ ...meetup, temperature });

  res.status(201).send({ data });
};

export const deleteById = async (req, res) => {
  const { id } = req.params;

  await Assistance.destroy({
    where: {
      meetupId: id,
    },
  });

  const meetDeleted = await Meetup.destroy({
    where: {
      id: id,
    },
  });

  if (!meetDeleted) {
    return res
      .status(404)
      .send({ error: `Cannot find the meetup with id:  ${id}` });
  }

  res.status(204).json({ meetDeleted });
};
