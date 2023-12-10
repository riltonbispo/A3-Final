import * as Model from "../models/user.js";


export const getAll = async (req, res) => {
  try {
    const result = await Model.getAll()
    res.json(result)
  } catch (error) {
    console.log(`API: Erro ao buscar Usuarios: ${error}`)
    res.sendStatus(500)
  }
}

export const getOne = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const result = await Model.getOne(id)

    if (result) {
      res.status(200).json(result);
    } else {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

  } catch (error) {
    console.log(`API: Erro ao buscar Usuario: ${error}`)
    res.sendStatus(500)
  }
}

export const create = async (req, res) => {
  try {
    const { Email } = req.body

    if (Email) {
      const newUser = await Model.User.create({ Email })

      return res.status(201).json(newUser)
    } else {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
    }
  } catch (error) {
    console.log(`API: Erro ao criar usuario: ${error}`)
  }
}

export const update = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { Email } = req.body;

    const existingUser = await Model.User.findByPk(id);

    if (existingUser) {
      await Model.update(id, Email);

      return res.status(200).json({ message: 'Usuário atualizado com sucesso.' });
    } else {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

  } catch (error) {
    console.log(`API: Erro ao atualizar usuario: ${error}`)
    res.sendStatus(500)
  }
}

export const del = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const existingUser = await Model.User.findByPk(id);

    if (existingUser) {
      await Model.del(id);
      res.status(204).send();
    } else {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

  } catch (error) {
    console.log(`API: Erro ao deletar Usuario`)
    res.sendStatus(500)
  }
}