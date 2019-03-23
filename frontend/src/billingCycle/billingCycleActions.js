import axios from 'axios'//para as chamadas http
import { toastr } from 'react-redux-toastr'//adicionando as mensagens de sucesso ou de erro
import { reset as resetForm , initialize } from 'redux-form'
import { showTabs,selectTab  } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return{
        type:'BILLING_CYCLES_FETCHED',
        payload:request
    }
}
//e.response.data (os dados que vieram da resposta)
export function create(values){
     return submit(values,'post')
}

export function update(values){
    return submit(values,'put')
}

export function deletar(values){
    return submit(values,'delete')
}

function submit(values, method){
    return dispach=>{
        const id = values._id ? values._id :''
        axios[method](`${BASE_URL}/billingCycles/${id}`,values)
        .then(resp=>{
            toastr.success('Sucesso','Operação Realizada com sucesso.')
            dispach([
                init()
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
        selectTab('tabUpdate'),
        initialize('billingCycleForm',billingCyle)//para poder carregar o form, ja preenchido
    ]
}

//função para inicializar o meu cadastro, com os dados vazios
export function init(){
    return [
        showTabs('tabList','tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm',INITIAL_VALUES)
    ]
}