import express from 'express';
import { getAllCategories, getOneCategory } from '../controllers/categoryController.js'

const router = express.Router()

router.get('/', getAllCategories)
router.get('/:id', getOneCategory)


export default router