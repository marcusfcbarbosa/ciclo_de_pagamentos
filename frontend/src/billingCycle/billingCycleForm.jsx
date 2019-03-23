import React ,{Component} from   'react'
//reduxForm liga o formulario com o estado do Redux
//Field tag para controlar campos do formulario
import { reduxForm, Field } from 'redux-form'
//Personalizando o Field
import labelAndInput from   '../common/form/labelAndInput'


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
                </div>
            </form>
        )
    }
}
//destroyOnUnmount: false essa flag para que o estado do formulario esteja sempre disponivel no mesmo(vem do redux-form)
//usado para quando se clcika em uma ação do formulario os dados ja vem carregados ex:(Tela de edição)
export default reduxForm({form:'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)