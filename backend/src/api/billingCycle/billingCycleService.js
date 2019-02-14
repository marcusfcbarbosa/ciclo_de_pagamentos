const billingCycle = require('./billingCycle')

//quais verbos http que eu quero trabalhar
billingCycle.methods(['get','post','put','delete'])
//validações do dominio ODM
billingCycle.updateOptions({ new:true, runValidators:true})

module.exports = billingCycle