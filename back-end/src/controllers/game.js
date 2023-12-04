import * as Model from "../models/game.js";

export const getAll = async (req, res) => {
  try {
    const result = await Model.getAll();
    res.json(result);
  } catch (error) {
    console.log(`API: Erro ao buscar Jogos: ${error}`);
    res.sendStatus(500);
  }
};

export const getOne = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await Model.getOne(id);

    if (result) {
      res.status(200).json(result);
    } else {
      return res.status(404).json({ error: 'Jogo não encontrado.' });
    }

  } catch (error) {
    console.log(`API: Erro ao buscar Jogo: ${error}`);
    res.sendStatus(500);
  }
};

export const create = async (req, res) => {
  try {
    const { Name, User_Id, Rating } = req.body;
    const Image = req.file.filename;

    if (Name && User_Id && Image) {

      const responseData = {
        Name,
        User_Id: parseInt(User_Id),
        Rating: parseInt(Rating),
        Image
      };

      const newGame = await Model.Game.create(responseData);

      return res.status(201).json(newGame);
    } else {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
    }
  } catch (error) {
    console.log(`API: Erro ao criar jogo: ${error}`);
    res.sendStatus(500);
  }
};

export const update = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { Name, Image, Rating } = req.body;

    const existingGame = await Model.Game.findByPk(id);

    if (existingGame) {
      await Model.update(id, { Name, Image, Rating });

      return res.status(200).send();
    } else {
      return res.status(404).json({ error: 'Jogo não encontrado.' });
    }

  } catch (error) {
    console.log(`API: Erro ao atualizar jogo: ${error}`);
    res.sendStatus(500);
  }
};

export const del = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const existingGame = await Model.Game.findByPk(id);

    if (existingGame) {
      await Model.del(id);
      res.status(204).send();
    } else {
      return res.status(404).json({ error: 'Jogo não encontrado.' });
    }

  } catch (error) {
    console.log(`API: Erro ao deletar Jogo`);
    res.sendStatus(500);
  }
};