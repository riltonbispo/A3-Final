import * as Model from '../models/category.js'

export const getAllCategories = async (req, res) => {
  try {
    const result = await Model.getAllCategories()
    res.json(result)
  } catch (error) {
    console.log(`API: Erro ao buscar Categorias: ${error}`)
    res.sendStatus(500)
  }
}

export const getOneCategory = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const result = await Model.getOneCategory(id)

    if (result) {
      res.status(200).json(result);
    } else {
      return res.status(404).json({ error: 'Categoria não encontrado.' });
    }

  } catch (error) {
    console.log(`API: Erro ao buscar Categoria: ${error}`)
    res.sendStatus(500)
  }
}