import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import login from './components/login'

export default _ => (
  <Router>
    <Route path='/login' component={login}/>
  </Router>
)