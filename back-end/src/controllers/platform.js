import * as Model from '../models/platform.js'

export const getAll = async (req, res) => {
  try {
    const result = await Model.getAll()
    res.json(result)
  } catch (error) {
    console.log(`API: Erro ao buscar Plataformas: ${error}`)
    res.sendStatus(500)
  }
}

export const getOne = async (req,res) => {
  try {
    const id = parseInt(req.params.id)
    const result = await Model.getOne(id)

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

export const create = async (req,res) => {
  try {
    const { Name } = req.body

    if (Name) {
      const newPlatform = await Model.Platform.create({ Name })

      return res.status(201).json(newPlatform)
    } else {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
    }

  } catch (error) {
    console.log(`API: Erro ao criar plataforma: ${error}`)
  }
}

export const update = async (req,res) => {
  try {
    const id = parseInt(req.params.id);
    const { Name } = req.body;

    const existingPlatform = await Model.Platform.findByPk(id);

    if (existingPlatform) {
      Model.update(id, Name);
      return res.status(200).json({ message: 'Plataforma atualizada com sucesso.' });
    } else {
      return res.status(404).json({ error: 'Plataforma não encontrada.' });
    }

  } catch (error) {
    console.log(`API: Erro ao atualizar plataforma: ${error}`)
    res.sendStatus(500)
  }
}

export const del = async (req,res) => {
  try {
    const id = parseInt(req.params.id)

    const existingPlatform = await Model.Platform.findByPk(id);

    if (existingPlatform) {
      await Model.del(id);
      res.status(204).send();
    } else {
      return res.status(404).json({ error: 'Plataforma não encontrado.' });
    }

  } catch (error) {
    console.log(`API: Erro ao deletar Plataforma`)
    res.sendStatus(500)
  }
}