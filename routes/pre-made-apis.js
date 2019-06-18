const express = require('express');
const router = express.Router();

const person = require("../models-generator/person");
const httpStatusCodes = require("../models-generator/http-status-codes");

// Caso seja passado um status como parâmetro, a função o setará em seu retorno
// Do contrário, um status será respondido aleatoriamente
// Se for passado na query o parâmetro [requesttime](milisegundos), a requisição só será respondida depois de decorrer este tempo
router.get('/api/juststatus/:status?', (req, res) => {

    if(!req.params.status){
        req.params.status = httpStatusCodes.getRandomicCode();
    }

    if (!isNaN(req.params.status)) {
        req.params.status = parseInt(req.params.status)
    }

    if (httpStatusCodes.codes.indexOf(req.params.status) == -1) {
        req.params.status = 400;
    }

    if(req.query.requesttime){
        setTimeout(function(){
            res.status(req.params.status).send();
        },req.query.requesttime);
    } else{
        res.status(req.params.status).send();
    }
})

// Responde a requisição com a quantidade de models pedidos
router.get('/api/models/:model', (req, res) => {
    let response;

    switch (req.params.model) {
        case "person":
            response = person.createPersons(req.query.size ? req.query.size : 1);
            break;
        default:
            res.status(400).end("This model doesn't exists!");
            break;
    }

    res.status(200).send(response);
})

module.exports = router;