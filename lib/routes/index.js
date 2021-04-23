import express from 'express';
import usuarios from './usuarios';
import meetup from './meetup';

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/meetup', meetup);

export default router;
