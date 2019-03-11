import { combineReducers } from 'redux'

import DashBoardReducer from '../dashboard/dashBoardReducer'


const rootReducer = combineReducers({
    dashboard: DashBoardReducer
})

export default rootReducer