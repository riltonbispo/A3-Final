import express from 'express';
import * as Game from '../controllers/game.js';
import * as Platform from '../controllers/gamePlatform.js'
import * as Category from '../controllers/gameCategory.js'

const router = express.Router();

router.get('/:id/platforms', Platform.getAll);
router.get('/:id/categories', Category.getAll);
router.get('/:id', Game.getOne);
router.get('/', Game.getAll);

router.post('/:id/platforms', Platform.create);
router.post('/:id/categories', Category.create);
router.post('/', Game.create);

router.patch('/:id/platforms/:idPlatform', Platform.update);
router.patch('/:id/categories/:idCategory', Category.update);
router.patch('/:id', Game.update);

router.delete('/:id/platforms/:idPlatform', Platform.del);
router.delete('/:id/categories/:idCategory', Category.del);
router.delete('/:id', Game.del);

export default router;
