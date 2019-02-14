//Rotas tem mais a ver com configuração
const express = require('express')

module.exports = function(server){
    //Definir a URL base
    const router = express.Router()
    //toda url que começar com /api será encaminhado para o middleware router
    server.use('/api',router)


    //Rotas de ciclo de Pagamento, acessando aos serviços da api
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router,'/billingCycles')
}