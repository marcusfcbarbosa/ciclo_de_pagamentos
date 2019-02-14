const restfull = require('node-restful')//liga o express ao monoogose
const mongoose = restfull.mongoose

const creditSchema = new mongoose.Schema ({
    name:{ type: String , required: [true, 'informe o nome do crédito']},
    value: {type: Number, required: [true, 'Informe o valor do crédito']}
})

const debtSchema = new mongoose.Schema({
    name:{type:String, required: true},
    value:{type:Number,min:0, required:[true,'Informe o valor do Débito'] },
    status:{ type:String , required:false, uppercase:true ,
    enum:['PAGO','PENDENTE','AGENDADO']}
})

//Relação 1--->n
const billingCycleSchema = new mongoose.Schema({
    name:{type:String, required: [true,'Informe o nome do pagamento']},
    month:{type:Number, min:1, max:12, required:[true,'Informe o mês']},
    year:{type: Number, min:1970, max:2100, required:[true,'Informe o ano do pagamento']},
    credits:[creditSchema],
    debits:[debtSchema]
})

module.exports = restfull.model('BillyngCycle',billingCycleSchema)