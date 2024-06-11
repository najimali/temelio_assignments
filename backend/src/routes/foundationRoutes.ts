import { Router } from 'express';
import { getAllFoundations, createFoundation } from '../controllers/foundationController';

const router = Router();

router.get('/', getAllFoundations);
router.post('/', createFoundation);

export default router;