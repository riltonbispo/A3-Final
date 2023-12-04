import express from 'express';
import * as Platform from '../controllers/platform.js'

const router = express.Router()

router.get('/', Platform.getAll)
router.get('/:id', Platform.getOne)
router.post('/', Platform.create)
router.patch('/:id', Platform.update)
router.delete('/:id', Platform.del)

export default router
