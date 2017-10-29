import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Card.css';

class Card extends Component {
  constructor(props){
    super(props)
  }
  handleClick(){
    this.props.history.push('/details/')
  }
  commentcount(){
    if(this.props.comments == undefined){
      return ''
    }
    else {
      return this.props.comments + ' comments'
    }
  }
  render(){
    return(
      <div className='container'>
        <button type="button" className='card' onClick={this.handleClick.bind(this)}>
        {this.props.title}
        <br /><br /><br />
        <p className='comments'>{this.commentcount()}</p>
        </button>
      </div>
    )
  }
}

export default withRouter(Card);
