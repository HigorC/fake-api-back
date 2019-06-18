const express = require('express');
const router = express.Router();

const client = require('../config/redis-connetion');

router.get('/api/:rota', (req, res) => {
    client.get(req.params.rota, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.send(JSON.parse(result));
    })
})

router.post('/new/:rota', (req, res) => {
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

module.exports = router;