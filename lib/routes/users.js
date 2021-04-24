import {
  index,
  getById,
  register,
  login,
  deleteById,
} from '../controllers/user_controller';
import { errorAwareRouter } from './utils';

const router = errorAwareRouter();

router.get('/', index);
router.get('/:id', getById);
router.post('/register', register);
router.post('/login', login);
router.delete('/:id', deleteById);

export default router;
