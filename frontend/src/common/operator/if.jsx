//para nao misturar javascript dentro da função, estarei criando essa funcionalidade
import React from 'react'

export default props => {
    if(props.test){
        return props.children
    }else{
        return  false
    }
}