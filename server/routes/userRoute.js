import UserContr from '../controllers/userCtr';
import express from 'express';

const router = express.Router();

router.post('/register', UserContr.createUser);

router.post('/login', UserContr.loginUser);

router.post('/logout', UserContr.logoutUser);


export default router;