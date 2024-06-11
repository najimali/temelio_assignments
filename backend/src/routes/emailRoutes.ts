import { Router } from 'express';
import { getAllEmails, sendEmail } from '../controllers/emailController';

const router = Router();

router.get('/',getAllEmails);
router.post('/send', sendEmail);

export default router;