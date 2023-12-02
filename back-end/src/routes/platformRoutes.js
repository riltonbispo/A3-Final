import express from 'express';
import { createPlatform, deletePlatform, getAllPlatforms, getOnePlatform, updatePlatform } from '../controllers/platformController.js'

const router = express.Router()

router.get('/', getAllPlatforms)
router.get('/:id', getOnePlatform)
router.post('/', createPlatform)
router.patch('/:id', updatePlatform)
router.delete('/:id', deletePlatform)

export default router
