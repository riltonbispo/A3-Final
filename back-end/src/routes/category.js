import express from 'express';
import { getAllCategories, getOneCategory } from '../controllers/category.js'

const router = express.Router()

router.get('/', getAllCategories)
router.get('/:id', getOneCategory)


export default router