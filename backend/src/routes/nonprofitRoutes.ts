import { Router } from 'express';
import { getAllNonprofits, createNonprofit } from '../controllers/nonprofitController';

const router = Router();

router.get('/', getAllNonprofits);
router.post('/', createNonprofit);

export default router;