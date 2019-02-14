const billingCycle = require('./billingCycle')

//quais verbos http que eu quero trabalhar
billingCycle.methods(['get','post','put','delete'])
//validações do dominio ODM
billingCycle.updateOptions({ new:true, runValidators:true})

billingCycle.route('count',(req,res,next)=>{
    billingCycle.count((error,value) =>{
        if(error){
            res.status(500).json({erros:[error]})
        }else{
            res.json({value})
        }
    })
})

module.exports = billingCycle