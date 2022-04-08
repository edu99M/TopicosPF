const express = require('express');
const routes = express.Router();
const controle = require('../controller/SolicitanteCont');
const Requisicao = require('../controller/SolicitanteCont');
const Solicitante = require('../controller/SolicitanteCont');


//aqui vao todos edpoits possiveis para o programa
routes.route('/solicitante').get(controle.listar);


routes.route('/solicitante').get(controle.listar);
routes.route('/solicitante').post(controle.incluir);
routes.route('/solicitante/:id').delete(controle.excluir);
routes.route('/solicitante/:id').get(controle.obterPeloId);
routes.route('/solicitante/filtro/:filtro').get(controle.filtrar);


routes.route('/requisicao').put(requisicao.alterar);
routes.route('/requisicao').get(requisicao.listar);
routes.route('/requisicao').post(requisicao.incluir);
routes.route('/requisicao/:id').delete(requisicao.excluir);

routes.route('/solicitante').put(solicitante.alterar);
routes.route('/solicitante').get(solicitante.listar);
routes.route('/solicitante').post(solicitante.incluir);
routes.route('/solicitante/:id').delete(solicitante.excluir);
module.exports = routes;