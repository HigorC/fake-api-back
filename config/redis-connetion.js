// Para utilizar localmente
const redis = require('redis');
const client = redis.createClient();

// Para deploy no Heroku
// const client = require('redis').createClient(process.env.REDIS_URL);

client.on('connect', function () {
    console.log('Cliente Redis conectado!');
});

client.on('erro', function (err) {
    console.log('Algo deu errado' + err);
});

module.exports = client;