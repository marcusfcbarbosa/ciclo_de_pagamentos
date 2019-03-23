import axios from 'axios'//para as chamadas http
import { toastr } from 'react-redux-toastr'//adicionando as mensagens de sucesso ou de erro
import { reset as resetForm } from 'redux-form'
import { showTabs,selectTab  } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return{
        type:'BILLING_CYCLES_FETCHED',
        payload:request
    }
}



//e.response.data (os dados que vieram da resposta)
export function create(values){

        return dispach=>{
            axios.post(`${BASE_URL}/billingCycles`,values)
            .then(resp=>{
                toastr.success('Sucesso','Operação Realizada com sucesso.')
                dispach([
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList','tabCreate')
                ])
            })
            .catch(e =>{
                e.response.data.errors.forEach(error=>toastr.error('Erro',error))
            })
        }
}
//como eu tenho o redux multi, ele permite que eu retorne um array de actions
export function showUpdate(billingCyle){
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate')
    ]
}