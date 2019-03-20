import React ,{Component} from   'react'
//reduxForm liga o formulario com o estado do Redux
//Field tag para controlar campos do formulario
import { reduxForm, Field } from 'redux-form'

class BillingCycleForm extends  Component{
    render(){
        //handleSubmit é decorado pelo redux-form, para eventos de onSubmit
        const { handleSubmit } = this.props
        
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component='input'  />
                    <Field name='month' component='input' />
                    <Field name='year' component='input'  />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form:'billingCycleForm'})(BillingCycleForm)