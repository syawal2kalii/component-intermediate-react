import React, { Component } from 'react';
import './App.css';

const withLocalStorage = (WrappedComponent)=>{
  class WithLocalStorage extends Component {
    get = (key) => {
      return localStorage.getItem(key)
    }

    save = (key,data)=>{
      return localStorage.setItem(key,data)
    }

    remove = (key) => {
      return localStorage.removeItem(key)
    }

    render() {
      return <WrappedComponent get = {this.get}
                               save = {this.save}
                               remove = {this.remove}
                               {...this.props} 
      />
    }
  }

  return WithLocalStorage
}

class User extends Component{

  state = {
    name : ''
  }  
  
  componentDidMount(){
    const name = this.props.get('name')
    
    if (!name) {
      this.props.save('name','user_random')
      this.setState({
        name : 'user_random'
      });
    }else{
      this.setState({
        name:this.props.get('name')
      })
    }
  }

  render(){
    return (
      <div>
        I am {this.state.name}
      </div> 
    )
  }
}

export default withLocalStorage(User);
