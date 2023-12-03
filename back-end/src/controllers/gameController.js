import * as GameModel from "../models/gameModel.js";
const { Game } = GameModel;

export const getAllGames = async (req, res) => {
  try {
    const result = await GameModel.getAllGames();
    res.json(result);
  } catch (error) {
    console.log(`API: Erro ao buscar Jogos: ${error}`);
    res.sendStatus(500);
  }
};

export const getOneGame = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await GameModel.getOneGame(id);

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

export const createGame = async (req, res) => {
  try {
    const { Name, User_Id, Image, Rating } = req.body;

    if (Name && User_Id) {
      const newGame = await Game.create({ Name, User_Id, Image, Rating });

      return res.status(201).json(newGame);
    } else {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
    }
  } catch (error) {
    console.log(`API: Erro ao criar jogo: ${error}`);
    res.sendStatus(500);
  }
};

export const updateGame = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { Name, Image, Rating } = req.body;

    const existingGame = await Game.findByPk(id);

    if (existingGame) {
      await GameModel.updateGame(id, { Name, Image, Rating });

      return res.status(200).send();
    } else {
      return res.status(404).json({ error: 'Jogo não encontrado.' });
    }

  } catch (error) {
    console.log(`API: Erro ao atualizar jogo: ${error}`);
    res.sendStatus(500);
  }
};

export const deleteGame = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const existingGame = await Game.findByPk(id);

    if (existingGame) {
      await GameModel.deleteGame(id);
      res.status(204).send();
    } else {
      return res.status(404).json({ error: 'Jogo não encontrado.' });
    }

  } catch (error) {
    console.log(`API: Erro ao deletar Jogo`);
    res.sendStatus(500);
  }
};