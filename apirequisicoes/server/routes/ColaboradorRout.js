const express = require('express');
const routes = express.Router();
const controle = require('../controller/ColaboradorCont');

//aqui vao todos edpoits possiveis para o programa
routes.route('/colaboradores').get(controle.listar);
module.exports = routes;

routes.route('/colaboradores').get(controle.listar);
routes.route('/colaboradores').post(controle.incluir);
