import { User } from "../models/userModel.js"

export const getAllUsers = async (req, res) => {
  try {
    const result = await User.findAll()
    res.json(result)
  } catch (error) {
    console.log(`API: Erro ao buscar Usuarios: ${error}`)
    res.sendStatus(500)
  }
}

export const getOneUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const result = await User.findByPk(id)
    
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

export const createUser = async (req, res) => {
  try {
    const { Email } = req.body

    if (!Email) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
    }

    const newUser = await User.create({
      Email
    })

    return res.status(201).json(newUser)
  } catch (error) {
    console.log(`API: Erro ao criar usuario: ${error}`)
  }
}

export const updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { Email } = req.body;

    const existingUser = await User.findByPk(id);

    if (existingUser) {
      existingUser.Email = Email;
      await existingUser.save();
      return res.status(200).json(existingUser);
    } else {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

  } catch (error) {
    console.log(`API: Erro ao atualizar usuario: ${error}`)
    res.sendStatus(500)
  }
}

export const deleteUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const existingUser = await User.findByPk(id);

    if (existingUser) {
      await existingUser.destroy();
      res.status(204).send();
    } else {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

  } catch (error) {
    console.log(`API: Erro ao deletar Usuario`)
    res.sendStatus(500)
  }
}