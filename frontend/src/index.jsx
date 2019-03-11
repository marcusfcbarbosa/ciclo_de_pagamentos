import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'//usado para criar o estado unico da aplicação
import { Provider } from 'react-redux'//Ele pega seu estado e leva aos componentes internos

import App from './main/app'
import reducers from './main/reducers'

const store = createStore(reducers)

ReactDOM.render(
   <Provider store={store}>
    <App />   
   </Provider>
, document.getElementById('app') )