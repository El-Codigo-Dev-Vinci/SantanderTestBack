import express from 'express';
import users from './users';
import meetup from './meetup';
import assistance from './assistance';

const router = express.Router();

router.use('/api/users', users);
router.use('/api/meetup', meetup);
router.use('/api/assistance', assistance);

export default router;
