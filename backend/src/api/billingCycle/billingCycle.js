const restfull = require('node-restful')//liga o express ao monoogose
const mongoose = restfull.mongoose

const creditSchema = new mongoose.Schema ({
    name:{ type: String , required: true},
    value: {type: Number, required: true}
})

const debtSchema = new mongoose.Schema({
    name:{type:String, required: true},
    value:{type:Number,min:0, required:true },
    status:{ type:String , required:false, uppercase:true ,
    enum:['PAGO','PENDENTE','AGENDADO']}
})

//Relação 1--->n
const billingCycleSchema = new mongoose.Schema({
    name:{type:String, required: true},
    month:{type:Number, min:1, max:12, required:true},
    year:{type: Number, min:1970, max:2100, required:true},
    credits:[creditSchema],
    debits:[debtSchema]
})

module.exports = restfull.model('BillyngCycle',billingCycleSchema)