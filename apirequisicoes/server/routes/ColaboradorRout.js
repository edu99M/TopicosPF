const express = require('express');
const routes = express.Router();
const controle = require('../controller/ColaboradorCont');
const Requisicao = require('../controller/RequisicaoCont');
const Solicitante = require('../controller/SolicitanteCont');
const TipoRequisicao = require('../controller/TipoRequisicaoCont');

//aqui vao todos edpoits possiveis para o programa


routes.route('/colaboradores').get(controle.listar);
routes.route('/colaboradores').post(controle.incluir);
routes.route('/colaboradores/:id').delete(controle.excluir);
routes.route('/colaboradores/:id').get(controle.obterPeloId);
routes.route('/colaboradores/filtro/:filtro').get(controle.filtrar);
routes.route('/colaboradores').put(controle.alterar);

routes.route('/requisicao').put(Requisicao.alterar);
routes.route('/requisicao').get(Requisicao.listar);
routes.route('/requisicao').post(Requisicao.incluir);
routes.route('/requisicao/:id').delete(Requisicao.excluir);

routes.route('/solicitante').put(Solicitante.alterar);
routes.route('/solicitante').get(Solicitante.listar);
routes.route('/solicitante').post(Solicitante.incluir);
routes.route('/solicitante/:id').delete(Solicitante.excluir);

routes.route('/TipoRequisicao').put(TipoRequisicao.alterar);
routes.route('/TipoRequisicao').get(TipoRequisicao.listar);
routes.route('/TipoRequisicao').post(TipoRequisicao.incluir);
routes.route('/TipoRequisicao/:id').delete(TipoRequisicao.excluir);
module.exports = routes;