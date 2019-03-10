import LinkContr from '../controllers/linksCtr';
import express from 'express';

const router = express.Router();

router.post('/add', LinkContr.createLink);

router.get('/', LinkContr.getAllLink);

router.patch('/:id/edit', LinkContr.editLink);

router.delete('/:id/delete', LinkContr.deleteLink);

export default router;