import React, { Component } from 'react';
import './App.css';

const MyContext = React.createContext();

class App extends Component {
  state = {
    color : "black",
    info : 'warning',
  }
  render(){
  return (
    <MyContext.Provider value={this.state}>
      <header>
        <Navigation color="red" />
      </header>
    </MyContext.Provider>
  );
  }
}

class Navigation extends Component{
  render(){
    return(
      <div>
        <a href="#">Home</a>
        <a href="#">Kontak</a>

        <Search color={this.props.color}/>
        <Button />
      </div>
    )
  }
}

class Search extends Component{
  render(){
    return (
      <div>
        <label>Search</label>
        <input type="search" placeholder={this.props.color} />
      </div>
    )
  }
}

class Button extends Component{
  render(){
    return(
      <MyContext.Consumer>
        {(context)=>(
          <button>Warna yang kita dapat adalah {context.color} & infonya {context.info}</button>
        )}
      </MyContext.Consumer>
    )
  }
}

export default App;
