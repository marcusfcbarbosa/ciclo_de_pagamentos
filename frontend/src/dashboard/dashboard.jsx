import React, {Component} from 'react'


import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import ValueBox from '../common/widget/valueBox'

class DashBoard extends Component{
    render(){
        return(
                <div>
                    <ContentHeader tittle='Dashboard'  subtittle='Versão 1.0'/>
                    <Content>
                        <ValueBox 
                        cols='12 4'
                        color='green'
                        icon='bank'
                        value='R$ 10'
                        text='Total de créditos'
                        />
                        <ValueBox 
                        cols='12 4'
                        color='red'
                        icon='credit-card'
                        value='R$ 10'
                        text='Total de débitos'
                        />
                        <ValueBox 
                        cols='12 4'
                        color='blue'
                        icon='money'
                        value='R$ 0'
                        text='Valor Consolidado'
                        />
                    </Content>
                </div>
        )
    }
}

export default DashBoard