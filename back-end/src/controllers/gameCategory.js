import * as Model from '../models/gameCategory.js'

export const getAll = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const result = await Model.getAll(id)
    res.json(result)
  } catch (error) {
    console.log(`API: Erro ao buscar GameCategories: ${error}`)
    res.sendStatus(500)
  }
}

export const create = async (req, res) => {
  try {
    const Game_ID = parseInt(req.params.id)
    const { Category_ID } = req.body

    if (Game_ID && Category_ID) {
      const newData = await Model.GameCategory.create({ Game_ID, Category_ID })

      return res.status(201).json(newData)
    } else {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
    }
  } catch (error) {
    console.log(`API: Erro ao criar GameCategory: ${error}`)
  }
}

export const update = async (req, res) => {
  try {
    const id = parseInt(req.params.idCategory);
    const { Game_ID, Category_ID } = req.body

    const existing = await Model.GameCategory.findByPk(id);

    if (existing) {
      await Model.update(id, Game_ID, Category_ID);
      return res.status(200).json({ message: 'GameCategory atualizada com sucesso.' });
    } else {
      return res.status(404).json({ error: 'GameCategory não encontrado.' });
    }

  } catch (error) {
    console.log(`API: Erro ao atualizar GameCategory: ${error}`)
    res.sendStatus(500)
  }
}

export const del = async (req, res) => {
  try {
    const id = parseInt(req.params.idCategory)

    const existing = await Model.GameCategory.findByPk(id);

    if (existing) {
      await Model.del(id);
      res.status(204).send();
    } else {
      return res.status(404).json({ error: 'GameCategory não encontrado.' });
    }

  } catch (error) {
    console.log(`API: Erro ao deletar GameCategory`)
    res.sendStatus(500)
  }
}