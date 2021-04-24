import {
  index,
  getById,
  create,
  deleteById,
} from '../controllers/assistance._controller';
import { errorAwareRouter } from './utils';

const router = errorAwareRouter();

router.get('/', index);
router.get('/:id', getById);
router.post('/', create);
router.delete('/:id', deleteById);

export default router;
