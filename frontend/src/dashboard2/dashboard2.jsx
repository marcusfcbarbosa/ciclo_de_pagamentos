import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

import axios from 'axios'//para as requisições Http
const BASE_URL = 'http://localhost:3003/api'

//Esse é um exemplo de classe de Redux

export default class DashBoard2 extends Component {
    constructor(props){
        super(props)
            this.state = {credit:0 , debt:0 }
    }    
    
    componentWillMount(){
            axios.get(`${BASE_URL}/billingCycle/summary`)
                .then(resp => this.setState(resp.data))
    }

    render(){
        const { credit, debt} = this.state
        return(
                <div>
                    <ContentHeader tittle='Dashboard'  subtittle='Versão 2.0 Sem redux'/>
                    <Content>
                        <Row>
                            <ValueBox 
                            cols='12 4'
                            color='green'
                            icon='bank'
                            value={`R$  ${credit}`}
                            text='Total de créditos'
                            />
                            <ValueBox 
                            cols='12 4'
                            color='red'
                            icon='credit-card'
                            value={`R$ ${debt}` }
                            text='Total de débitos'
                            />
                            <ValueBox 
                            cols='12 4'
                            color='blue'
                            icon='money'
                            value={`R$ ${ credit -debt}`}
                            text='Valor Consolidado'
                            />
                        </Row>
                    </Content>
                </div>
        )
    }
}


