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
    let objList = [];    

    if (!/\d/.test(req.query.quantity)) {
        req.query.quantity = 1;
    }

    if (req.query.quantity > 1) {
        for (let i = 0; i < req.query.quantity; i++) {
            let objToPush = Object.assign({}, req.body);
            if (req.query.generateid) {
                objToPush.id = i;
            }
            objList.push(objToPush);
        }
    }

    let jsonToCreate = objList.length ? objList : req.body;
    
    client.set(req.params.rota, JSON.stringify(jsonToCreate), (err, result) => {
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