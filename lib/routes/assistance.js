import {
  index,
  getById,
  create,
  deleteById,
  saveEntry,
} from '../controllers/assistance._controller';
import { errorAwareRouter } from './utils';

const router = errorAwareRouter();

router.get('/', index);
router.get('/:id', getById);
router.post('/', create);
router.post('/:id/entry', saveEntry);
router.delete('/:id', deleteById);

export default router;
