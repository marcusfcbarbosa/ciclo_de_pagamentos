import React , {Component} from  'react'
import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

//dessa forma consigo logo quando crio o componente funcional, extrair o que vem dentro do estado (no caso o credit, debt)
export default({credit, debt}) =>(
    <Grid cols='12'>
        <legend> Resumo </legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit || 0}`} text='Total de créditos'/>

                <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt || 0}`} text='Total de débitos'/>
                
                <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit || 0 - debt || 0}`} text='Valor Consolidado'/>
            </Row>
    </Grid>

)