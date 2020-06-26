import React, { Component } from 'react';
import './App.css';

// context
const AuthContext = React.createContext()

// Hoc
const withAuth = (WrappedComponent)=>{
  class WithAuth extends Component{
    render(){
      return (
        <AuthContext.Consumer>
          {(context)=>(
            <WrappedComponent {...this.props} {...context} />
          )}
        </AuthContext.Consumer>
      )
    }
  }
  return WithAuth
}

class App extends Component{
  state = {
    username : 'randomuser'
  }

  render(){
    return( 
      <AuthContext.Provider value={this.state}>
        <h1>I'm App</h1>
        <Navigation />
        <Profile />
      </AuthContext.Provider>
    )
  }
}

class NavigationBase extends Component{
  render (){
    return (
      <nav>
        <a href="#">Home</a>
        <a href="/kontak">Kontak</a>
        <br/>
        <button> Current Login User : {this.props.username}</button>
      </nav>
    )
  }
}

const Navigation = withAuth(NavigationBase);

class ProfileBase extends Component{
  render(){
    return (
      <h2>Halaman Profile : {this.props.username}</h2>
    )
  }
}
const Profile = withAuth(ProfileBase)

export default App;
