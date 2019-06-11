const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Para utilizar localmente
// const redis = require('redis');
// const client = redis.createClient();

// Para deploy no Heroku
var client = require('redis').createClient(process.env.REDIS_URL);

app.use(express.json());

const banner = require('./assets/banner.js')

app.get('/itWorks', function (req, res) {
    res.send("Yes, It Works!")
});

app.get('/api/:rota', (req, res) => {
    client.get(req.params.rota, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.send(JSON.parse(result));
    })
})

app.post('/new/:rota', (req, res) => {
    client.set(req.params.rota, JSON.stringify(req.body), (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send(`Erro - ${err}`);
            return;
        }
        res.status(203).send({
            "rota": `https://fake-api-back.herokuapp.com/api/${req.params.rota}`
        });
    });
});

app.listen(port, () => {
    console.log(banner);
    console.log(`>> A todo vapor na porta ${port}!\n`);

    client.on('connect', function () {
        console.log('Cliente Redis conectado!');
    });

    client.on('erro', function (err) {
        console.log('Algo deu errado' + err);
    });
});