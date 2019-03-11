import React from 'react'
import {Router , Route, Redirect, hashHistory } from 'react-router'

//import Dashboard from '../dashboard/dashboard'
import Dashboard from '../dashboard2/dashboard2' //Dashboard sem redux

import BillingCycle from '../billingCycle/billingCycle'


export default props =>(
    <Router history={hashHistory}>
        <Route path="/" component={Dashboard}/>
        <Route path="/billingCycles" component={BillingCycle}/>
        <Redirect from="*" to="/"/>
    </Router>
)