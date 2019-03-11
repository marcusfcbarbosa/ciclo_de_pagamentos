import React, {Component} from 'react'

import  { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class DashBoard extends Component{
    render(){

        const { credit, debt} = this.props.summary

        return(
                <div>
                    <ContentHeader tittle='Dashboard'  subtittle='Versão 1.0'/>
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


const mapStateToProps = state =>({ 
    summary: state.dashboard.summary
})

//Padrão decorator
export default connect(mapStateToProps)(DashBoard)
