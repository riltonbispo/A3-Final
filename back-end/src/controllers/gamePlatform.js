import * as Model from '../models/gamePlatform.js'


export const getAll = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const result = await Model.getAll(id)
    res.json(result)
  } catch (error) {
    console.log(`API: Erro ao buscar GamePlatforms: ${error}`)
    res.sendStatus(500)
  }
}

export const create = async (req, res) => {
  try {
    const Game_ID = parseInt(req.params.id)
    const { Platform_ID } = req.body

    if (Game_ID && Platform_ID) {
      const newData = await Model.GamePlatform.create({ Game_ID, Platform_ID })

      return res.status(201).json(newData)
    } else {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
    }
  } catch (error) {
    console.log(`API: Erro ao criar GamePlatform: ${error}`)
  }
}

export const update = async (req, res) => {
  try {
    const id = parseInt(req.params.idPlatform);
    const { Game_ID, Platform_ID } = req.body

    const existing = await Model.GamePlatform.findByPk(id);

    if (existing) {
      await Model.update(id, Game_ID, Platform_ID);
      return res.status(200).json({ message: 'GamePLatform atualizada com sucesso.' });
    } else {
      return res.status(404).json({ error: 'GamePLatform não encontrado.' });
    }

  } catch (error) {
    console.log(`API: Erro ao atualizar GamePlatform: ${error}`)
    res.sendStatus(500)
  }
}

export const del = async (req, res) => {
  try {
    const id = parseInt(req.params.idPlatform)

    const existing = await Model.GamePlatform.findByPk(id);

    if (existing) {
      console.log(existing)
      await Model.del(id);
      res.status(204).send();
    } else {
      return res.status(404).json({ error: 'GamePlatform não encontrado.' });
    }

  } catch (error) {
    console.log(`API: Erro ao deletar GamePlatform`)
    res.sendStatus(500)
  }
}