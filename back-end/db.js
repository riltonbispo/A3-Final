const mySql = require("mysql2/promise");

const client = mySql.createPool('mysql://root:Douglas789.py@localhost:3306/echo');

async function returnGames() {
    const games = await client.query("SELECT * FROM games;");
    return games[0];
}

async function returnGame(id) {
    const game = await client.query("SELECT * FROM games WHERE id=?;", [id]);
    return game[0];
}

async function insertGame(game) {
    await client.query("INSERT INTO games(title_game, category_game, plataform_game, rating_game) VALUES (?, ?, ?, ?)", [game.title, game.category, game.plataform, game.rating]);
}

async function updateGame(id, game) {
    await client.query("UPDATE games SET title_game=?, category_game=?, plataform_game=?, rating_game=? WHERE id=?", [game.title, game.category, game.plataform, game.rating, id]);
}

async function deleteGame(id) {
    await client.query("DELETE FROM games WHERE id=?", [id]);
}

async function returnUsers() {
    const users = await client.query("SELECT * FROM users;");
    return users[0];
}

async function returnUser(id) {
    const user = await client.query("SELECT * FROM users WHERE id=?;", [id]);
    return user[0];
}

async function insertUser(user) {
    await client.query("INSERT INTO users(email_user, senha_user) VALUES (?, ?)", [user.email, user.senha]);
}

async function returnPlatforms() {
    const platforms = await client.query("SELECT * FROM platforms;"); 
    return platforms[0];
}

async function returnPlatform(id) {
    const platform = await client.query("SELECT * FROM platforms WHERE id=?;", [id]); 
    return platform[0];
}

async function insertPlatform(platform) {
    await client.query("INSERT INTO platforms(name_platform) VALUES (?)", [platform.name]);
}

async function updatePlatform(id, platform) {
    await client.query("UPDATE platforms SET name_platform=? WHERE id=?", [platform.name, id]);
}

async function deletePlatform(id) {
    await client.query("DELETE FROM platforms WHERE id=?", [id]);
}

module.exports = {
    returnGames,
    returnGame,
    insertGame,
    updateGame,
    deleteGame,
    returnUsers,
    returnUser,
    insertUser,
    returnPlatforms,
    returnPlatform,
    insertPlatform,
    updatePlatform,
    deletePlatform
}

// const games = [
//     {
//         id: 1,
//         title: 'Stardew Valley',
//         categorys: ['jogado', 'jogando', 'zerado'],
//         plataform: ['Steam', 'Epic', 'PSN', 'Xbox'],
//         img: './assets/img/image-game-1.png',
//         rating: 3
//     },
//     {
//         id: 2,
//         title: 'Red Dead Redemption 2',
//         categorys: ['jogado', 'jogando', 'zerado'],
//         plataform: ['Steam', 'Epic', 'PSN', 'Xbox'],
//         img: './assets/img/image-game-2.png',
//         rating: 3
//     },
//     {
//         id: 3,
//         title: 'Detroit: Become Human',
//         categorys: ['jogado', 'jogando', 'zerado'],
//         plataform: ['Steam', 'Epic', 'PSN', 'Xbox'],
//         img: './assets/img/image-game-3.png',
//         rating: 3
//     }
// ];

// const users = [
//     {
//         name: 'Luiz',
//         email: 'luiz@gmail.com',
//         senha: '029383'
//     }
// ];

// const platforms = [
//     {
//         name: 'steam'
//     }
// ];
