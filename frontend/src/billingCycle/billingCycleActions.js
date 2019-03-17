import axios from 'axios'//para as chamadas http
const BASE_URL = 'http://localhost:3003/api'


export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return{
        type:'BILLING_CYCLES_FETCHED',
        payload:request
    }   
}