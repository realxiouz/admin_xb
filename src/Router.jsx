import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './components/Login'
import List from './components/List'
import New from './components/New'
import Message from './components/Message'



import App from './containers/app'

export default _ => (
  <Router>
    <div>
      <Route exact path='/login' component={Login}/>
      <Route path='/manage' render={() => (
        <App>
          <Switch>
            <Route path='/manage/list' component= {List}/>
            <Route path='/manage/new' component= {New}/>
            <Route path='/manage/message' component= {Message}/>            
          </Switch>
        </App>
      )}></Route>
    </div>
  </Router>
)