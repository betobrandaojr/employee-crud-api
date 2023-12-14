/**
 * arquivo: Index.js
 * descrição: arquivo responsavel pela chamada da api na aplicação no local do Back-End
 * data: 13/12/2023
 * author: Paulo Brandão
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure',
    version: '1.0.0'
  });
});

module.exports = router;