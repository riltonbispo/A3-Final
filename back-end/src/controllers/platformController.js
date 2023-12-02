import * as Model from '../models/platformModel.js'
const { Platform } = Model

export const getAllPlatforms = async (req, res) => {
  try {
    const result = await Model.getAllPlatforms()
    res.json(result)
  } catch (error) {
    console.log(`API: Erro ao buscar Plataformas: ${error}`)
    res.sendStatus(500)
  }
}

export const getOnePlatform = async (req,res) => {
  try {
    const id = parseInt(req.params.id)
    const result = await Model.getOnePlatform(id)

    if (result) {
      res.status(200).json(result);
    } else {
      return res.status(404).json({ error: 'Plataforma não encontrada.' });
    }

  } catch (error) {
    console.log(`API: Erro ao buscar Plataform: ${error}`)
    res.sendStatus(500)
  }
}

export const createPlatform = async (req,res) => {
  try {
    const { Name } = req.body

    if (Name) {
      const newPlatform = await Platform.create({ Name })

      return res.status(201).json(newPlatform)
    } else {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
    }

  } catch (error) {
    console.log(`API: Erro ao criar plataforma: ${error}`)
  }
}

export const updatePlatform = async (req,res) => {
  try {
    const id = parseInt(req.params.id);
    const { Name } = req.body;

    const existingPlatform = await Platform.findByPk(id);

    if (existingPlatform) {
      Model.updatePlatform(id, Name);
      return res.status(200).json({ message: 'Plataforma atualizada com sucesso.' });
    } else {
      return res.status(404).json({ error: 'Plataforma não encontrada.' });
    }

  } catch (error) {
    console.log(`API: Erro ao atualizar plataforma: ${error}`)
    res.sendStatus(500)
  }
}

export const deletePlatform = async (req,res) => {
  try {
    const id = parseInt(req.params.id)

    const existingPlatform = await Platform.findByPk(id);

    if (existingPlatform) {
      await Model.deletePlatform(id);
      res.status(204).send();
    } else {
      return res.status(404).json({ error: 'Plataforma não encontrado.' });
    }

  } catch (error) {
    console.log(`API: Erro ao deletar Plataforma`)
    res.sendStatus(500)
  }
}