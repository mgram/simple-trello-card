import React, {Component} from 'react';
import './Details.css'
import {withRouter} from 'react-router-dom';

class Details extends Component{
  constructor(props){
    super(props);
    this.state ={messages:[],showcomments:'Show Comments'}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleComment = this.handleComment.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleClose(){
    this.props.history.push('/')
  }
  handleSubmit(submit_value){
    var newmessage;
    if(this.state.showcomments != 'Hide Comments'){
      this.setState({showcomments:'Hide Comments'})
    }
    newmessage = this.state.messages
    if(this.state.messages.length > 0){
    newmessage.unshift([submit_value])
    this.setState({messages:newmessage})
    }
    else{
      this.setState({messages:[submit_value]})
    }
  }
  handleComment(){
    var newstate;
    if(this.state.showcomments == 'Show Comments'){
      newstate = 'Hide Comments'
    }
    else{
      newstate = 'Show Comments'
    }
    this.setState({showcomments: newstate})
  }
  displayComments(){
    var i;
    var commentList = [];
    if (this.state.showcomments == 'Show Comments'){
      commentList = []
    }
    else {
      for(i=0; i<this.state.messages.length; i++)
      commentList.push(<Post message={this.state.messages[i]} />)
    }
    return commentList
  }
  render(){
    return(
    <div className='parent'>
      <div className='detailsContainer'>
        <button className='close' onClick={this.handleClose}> X </button>
        <div className='title'>
        <h2> Some title goes here </h2>
        </div>
        <CommentForm submit={this.handleSubmit}/>
        <p className='commentstatus' onClick={this.handleComment}><u>{this.state.showcomments}</u></p>
        {this.displayComments()}
      </div>
    </div>
    )
  }
}

class CommentForm extends Component{
  constructor(props){
    super(props)
    this.state ={value:''}
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(){
    if(this.state.value != ''){
    this.props.submit(this.state.value)
    this.setState({value:''})
    }
  }
  handleChange(evt){
    evt.preventDefault();
    this.setState({value:evt.target.value})
  }
  render(){
    return(
      <div>
      <div><textarea rows='4' onChange={this.handleChange} value={this.state.value}></textarea></div>
      <div className='commentform'><button onClick={this.handleClick}>POST</button></div>
      </div>
    )
  }
}

class Post extends Component{
  render(){
    return(
      <div className='post'><p className='message'>{this.props.message}</p></div>
    )
  }
}
export default Details;
