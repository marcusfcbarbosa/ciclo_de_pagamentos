import axios from 'axios'//para as chamadas http
import { toastr } from 'react-redux-toastr'//adicionando as mensagens de sucesso ou de erro
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
    const request = axios.post(`${BASE_URL}/billingCycles`,values)
                    .then(resp=>{
                        toastr.success('Sucesso','Operação Realizada com sucesso.')
                    })
                    .catch(e =>{
                        e.response.data.errors.forEach(error=>toastr.error('Erro',error))
                    })
    return{
        type:'TEMP',
        payload:request
    }
}