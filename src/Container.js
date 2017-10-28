import React, {Component} from 'react'
import Card from './Card';
import Details from './Details';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom'

class Container extends Component{
  render(){
    return(
      <Switch>
      <Route exact path='/' render={(props) => <Card title='Some title goes here' />} />
      <Route path='/details/' component={Details} />
      </Switch>
    )
  }
}

export default withRouter(Container);
