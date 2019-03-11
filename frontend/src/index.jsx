import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware,createStore } from 'redux'//usado para criar o estado unico da aplicação
import { Provider } from 'react-redux'//Ele pega seu estado e leva aos componentes internos


import promise  from 'redux-promise'//para trabalhar com requisição assincrona
import App from './main/app'
import reducers from './main/reducers'

//preparando minha store para trabalhar com requisições assincronas, o applyMiddleware espera a resolução da promise, para poder carregar o .data
const store = applyMiddleware(promise)(createStore)(reducers)

ReactDOM.render(
   <Provider store={store}>
    <App />   
   </Provider>
, document.getElementById('app'))