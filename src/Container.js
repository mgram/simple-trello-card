import React, {Component} from 'react'
import Card from './Card';
import Details from './Details';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom'

class Container extends Component{
  constructor(props){
    super(props);
    this.state ={messages:[]}
    this.addMessage = this.addMessage.bind(this)
  }
  addMessage(submit_value){
    let newmessage = this.state.messages
    if(this.state.messages.length > 0){
    newmessage.unshift([submit_value])
    this.setState({messages:newmessage})
    }
    else{
      this.setState({messages:[submit_value]})
    }
  }
  render(){
    return(
      <Switch>
      <Route exact path='/' render={(props) => <Card title='Some title goes here' comments={this.state.messages.length}/>} />
      <Route path='/details/' render={(props)=> <Details addMessage={this.addMessage} messages={this.state.messages} {...props}/>} />
      </Switch>
    )
  }
}

export default withRouter(Container);
