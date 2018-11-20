import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from './components/login'
import List from './components/List'

// import App from './containers/app'

export default _ => (
  <Router>
    <div>
      <Route path='/login' component={Login}/>
      <Route path='/list' component= {List}>
        {/* <Route path='list' component={List}/> */}
      </Route>
    </div>
  </Router>
)