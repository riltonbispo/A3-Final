const express = require('express');

const db = require('./db');

const app = express();

app.use(express.json());

app.get('/users', async (request, response) => {
    const results = await db.returnUsers();
    response.json(results);
});

app.get('/users/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const results = await db.returnUser(id);
    response.json(results);
});

app.post('/users', async (request, response) => {
    const user = request.body;
    await db.insertUser(user);
    response.sendStatus(201);
});

app.get('/games', async (request, response) => {
    const results = await db.returnGames();
    response.json(results);
});

app.get('/games/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const results = await db.returnGame(id);
    response.json(results);
});

app.post('/games', async (request, response) => {
    const game = request.body;
    await db.insertGame(game);
    response.sendStatus(201);
});

app.patch('/games/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const game = request.body;
    await db.updateGame(id, game);
    response.sendStatus(200);
});

app.delete('/games/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    await db.deleteGame(id);
    response.sendStatus(204);
});

app.get('/platforms', async (request, response) => {
    const results = await db.returnPlatforms();
    response.json(results);
});

app.get('/platforms/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const results = await db.returnPlatform(id);
    response.json(results);
});

app.post('/platforms', async (request, response) => {
    const platform = request.body;
    await db.insertPlatform(platform);
    response.sendStatus(201);
});

app.patch('/platforms/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const platform = request.body;
    await db.updatePlatform(id, platform);
    response.sendStatus(200);
});

app.delete('/platforms/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    await db.deletePlatform(id);
    response.sendStatus(204);
});

app.listen(3000);
