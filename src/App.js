import React, { Component } from 'react';
import './App.css';

const withUser = (WrappedComponent)=>{
  class WithUser extends Component {
    constructor(props){
      super(props)
      this.state = {
        user : 'Syawal',
        email : 'syawal20162016@gmail.com'
      }
    }
    render() {
      return <WrappedComponent user={this.state.user} email={this.state.email} {...this.props}/>
    }
  }
  return WithUser
}

class App extends Component{
  render(){
    return (
      <div>
        I am App {this.props.user} email {this.props.email}
      </div> 
    )
  }
}
export default withUser(App);
