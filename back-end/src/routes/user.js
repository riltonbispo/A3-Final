import express from 'express';
import * as User from '../controllers/user.js'

const router = express.Router()

router.get('/', User.getAll)
router.get('/:id', User.getOne)
router.post('/', User.create)
router.patch('/:id', User.update)
router.delete('/:id', User.del)

export default router