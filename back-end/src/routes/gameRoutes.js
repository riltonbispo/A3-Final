import express from 'express';
import { getAllGames, getOneGame, createGame, updateGame, deleteGame } from '../controllers/gameController.js';
import * as Platform from '../controllers/gamePlatformController.js'
import * as Category from '../controllers/gameCategoryController.js'

const router = express.Router();

router.get('/:id/platforms', Platform.getAll);
router.get('/:id/categories', Category.getAll);
router.get('/:id', getOneGame);
router.get('/', getAllGames);

router.post('/:id/platforms', Platform.create);
router.post('/:id/categories', Category.create);
router.post('/', createGame);

router.patch('/:id/platforms/:idPlatform', Platform.update);
router.patch('/:id/categories/:idCategory', Category.update);
router.patch('/:id', updateGame);

router.delete('/:id/platforms/:idPlatform', Platform.del);
router.delete('/:id/categories/:idCategory', Category.del);
router.delete('/:id', deleteGame);

export default router;
