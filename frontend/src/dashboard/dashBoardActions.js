import axios from 'axios'//para as requisições Http

const BASE_URL = 'http://localhost:3003/api'

export function getSummary(){

    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return{
            type:'BILLING_SUMMARY_FETCHED',
            payload:request
    }
}