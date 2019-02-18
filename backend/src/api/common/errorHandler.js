const _ = require('lodash')

//dentro do bundle, que aparece a lista de erros em formato json
//nesse exemplo ele verifica se tem erro, se nao tiver ele da um next()
//é necessario dentro de um middleware, dar um next, pois se não ele pára dentro do ponto
module.exports = (req,res, next) =>{
    const bundle = res.locals.bundle

    if(bundle.errors){
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    }else{
        next()
    }
}

const parseErrors = (nodeRestfulErrors) =>{
    const errors =[]
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))

    return errors
}