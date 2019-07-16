const express = require('express');
const router = express.Router();

const person = require("../models-generator/person");
const car = require("../models-generator/car");

const httpStatusCodes = require("../models-generator/http-status-codes");

// Caso seja passado um status como parâmetro, a função o setará em seu retorno
// Do contrário, um status será respondido aleatoriamente
// Se for passado na query o parâmetro [requesttime](milisegundos), a requisição só será respondida depois de decorrer este tempo
router.get('/api/juststatus', (req, res) => {

    if (!req.query.status)
        req.query.status = httpStatusCodes.getRandomicCode();

    if (!isNaN(req.query.status))
        req.query.status = parseInt(req.query.status)

    if (httpStatusCodes.codes.indexOf(req.query.status) == -1)
        req.query.status = 400;

    if (req.query.requesttime) {
        setTimeout(function () {
            res.status(req.query.status).send();
        }, req.query.requesttime);
    } else {
        res.status(req.query.status).send();
    }
})

// Retorna todos os status codes
router.get('/api/juststatus/allstatus', (req, res) => {
    res.status(200).send(httpStatusCodes.codes);
})

// Responde a requisição com a quantidade de models pedidos
router.get('/api/models', (req, res) => {
    let response;

    switch (req.query.model) {
        case "person":
            response = person.createPersons(req.query.size ? req.query.size : 1);
            break;
        case "car":
            response = car.createCars(req.query.size ? req.query.size : 1);
            break;
        default:
            res.status(400).end("This model doesn't exists!");
            break;
    }

    res.status(200).send(response);
})

// Retorna uma lista com todos os modelos pré-feitos
router.get('/api/models/allmodels', (req, res) => {
    let response = [
        { "id": "person", "tipo": "Pessoas" },
        { "id": "car", "tipo": "Carros" }
    ];

    res.status(200).send(response);
})

module.exports = router;