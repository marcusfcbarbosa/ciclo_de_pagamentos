import { combineReducers } from 'redux'
import DashBoardReducer from '../dashboard/dashBoardReducer'
import TabReducer  from '../common/tab/tabReducer'
import BillingCycleReducer from  '../billingCycle/billingCycleReducer'

//combinação de todos os estados de todos os reducers, que são chamado na index.jsx
const rootReducer = combineReducers({
    dashboard: DashBoardReducer,
    tab:TabReducer,
    billingCycle:BillingCycleReducer
})

export default rootReducer