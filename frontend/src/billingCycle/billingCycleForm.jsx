import React ,{Component} from   'react'
//conectando com o redux
import {connect } from 'react-redux'
import { bindActionCreators } from   'redux'
//reduxForm liga o formulario com o estado do Redux
//Field tag para controlar campos do formulario
//formValueSelector = pega um valor que esta dentro do formulario
import { reduxForm, Field, formValueSelector } from 'redux-form'
//Personalizando o Field
import labelAndInput from   '../common/form/labelAndInput'
//importando a Action
import { init } from './billingCycleActions'

import ItemList from './itemList'


class BillingCycleForm extends  Component{
    
    render(){
        //handleSubmit é decorado pelo redux-form, para eventos de onSubmit
        const { handleSubmit,readOnly,credits ,debts} = this.props
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput}  label='Nome' cols='12 4' placeholder='Informe o nome' readOnly={readOnly}/>
                    <Field name='month' component={labelAndInput} label='Mês' cols='12 4' placeholder='Informe o mês' type='number' readOnly={readOnly} />
                    <Field name='year' component={labelAndInput} label='Ano' cols='12 4' placeholder='Informe o ano' type='number' readOnly={readOnly} />
                    <ItemList cols='12 6' readOnly={readOnly} list={credits} 
                    field='credits' legend='Créditos'/>
                    <ItemList cols='12 6' readOnly={readOnly} list={debts} 
                    field='debts' legend='Débitos'/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init} >Cancelar</button>
                </div>
            </form>
        )
    }
}

//destroyOnUnmount: false essa flag para que o estado do formulario esteja sempre disponivel no mesmo(vem do redux-form), não destrói o estado do formulario, mesmo quando sai dele
//usado para quando se clcika em uma ação do formulario os dados ja vem carregados ex:(Tela de edição)
BillingCycleForm = reduxForm({form:'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)

//pegando as listas de credit e debit
const selector =formValueSelector('billingCycleForm')
const mapStateToProps = state =>({
    credits:selector(state,'credits'),
    debts:selector(state,'debts'),
})


var mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleForm)