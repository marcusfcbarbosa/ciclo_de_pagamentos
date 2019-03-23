import React ,{Component} from   'react'
//conectando com o redux
import {connect } from 'react-redux'
import { bindActionCreators } from   'redux'
//reduxForm liga o formulario com o estado do Redux
//Field tag para controlar campos do formulario
import { reduxForm, Field } from 'redux-form'
//Personalizando o Field
import labelAndInput from   '../common/form/labelAndInput'
//importando a Action
import { init } from './billingCycleActions'


class BillingCycleForm extends  Component{
    
    render(){
        //handleSubmit é decorado pelo redux-form, para eventos de onSubmit
        const { handleSubmit } = this.props
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput}  label='Nome' cols='12 4' placeholder='Informe o nome'/>
                    <Field name='month' component={labelAndInput} label='Mês' cols='12 4' placeholder='Informe o mês' type='number' />
                    <Field name='year' component={labelAndInput} label='Ano' cols='12 4' placeholder='Informe o ano' type='number' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init} >Cancelar</button>
                </div>
            </form>
        )
    }
}

//destroyOnUnmount: false essa flag para que o estado do formulario esteja sempre disponivel no mesmo(vem do redux-form), não destrói o estado do formulario, mesmo quando sai dele
//usado para quando se clcika em uma ação do formulario os dados ja vem carregados ex:(Tela de edição)
BillingCycleForm = reduxForm({form:'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)

var mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null,mapDispatchToProps)(BillingCycleForm)