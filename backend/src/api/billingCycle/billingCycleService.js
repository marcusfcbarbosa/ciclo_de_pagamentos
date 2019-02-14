const billingCycle = require('./billingCycle')

//quais verbos http que eu quero trabalhar
billingCycle.methods(['get','post','put','delete'])
//validações do dominio ODM
billingCycle.updateOptions({ new:true, runValidators:true})

//obtendo o contador de pagamentos
billingCycle.route('count',(req,res,next)=>{
    billingCycle.count((error,value) =>{
        if(error){
            res.status(500).json({erros:[error]})
        }else{
            res.json({value})
        }
    })
})

billingCycle.route('summary',(req,res,next)=>{
    billingCycle.aggregate({
        $project:{ credit:{$sum:"$credits.value"},debt:{$sum:"$debits.value"}}
    },
    {
        $group:{ _id:null, credit:{$sum:"$credit"}, debt:{$sum:"$debt"}}
    },{

        $project:{ _id:0, credit:1, debt:1}
    },(error,result)=>{
        if(error){
            res.status(500).json({erros:[error]})
        }else{
            res.json(result[0] || {credit:0,debt:0})
        }
    }
   )
})



module.exports = billingCycle