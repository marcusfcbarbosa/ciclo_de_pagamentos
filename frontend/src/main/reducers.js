import { combineReducers } from 'redux'

//import DashBoardReducer from '../dashboard/dashBoardReducer'


const rootReducer = combineReducers({
    dashboard: () => ({ summary: { credit:100, debt:50 }})
})

export default rootReducer