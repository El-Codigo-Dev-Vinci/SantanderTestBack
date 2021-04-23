import {
  index,
  getById,
  registro,
  login,
  deleteById,
} from '../controllers/usuario_controller';
import { errorAwareRouter } from './utils';

const router = errorAwareRouter();

router.get('/', index);
router.get('/:id', getById);
router.post('/registro', registro);
router.post('/login', login);
router.delete('/:id', deleteById);

export default router;
