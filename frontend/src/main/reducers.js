import { combineReducers } from 'redux'
//importando Redux-form
import { reducer as  formReducer } from 'redux-form'

import DashBoardReducer from '../dashboard/dashBoardReducer'
import TabReducer  from '../common/tab/tabReducer'
import BillingCycleReducer from  '../billingCycle/billingCycleReducer'

//combinação de todos os estados de todos os reducers, que são chamado na index.jsx
const rootReducer = combineReducers({
    dashboard: DashBoardReducer,
    tab:TabReducer,
    billingCycle:BillingCycleReducer,
    form:formReducer
})

export default rootReducer