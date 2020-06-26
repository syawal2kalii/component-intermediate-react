import React, { Component } from 'react';
import './App.css';

class Amount extends Component{
  constructor(props){
    super(props);
    this.state = {
      amount : 0
    };
  }

  onIncrement = () => {
    this.setState(state => ({ amount : state.amount + 1}));
  };

  onDecrement = () => { 
    this.setState(state => ({ amount : state.amount - 1 }));
  };

  render (){
    return (
      <div>
        <button type="button" onClick={this.onIncrement}>+</button>
        <button type="button" onClick={this.onDecrement}>-</button>
        {this.props.render(this.state.amount)}
      </div>
    )
  }
}

class App extends Component{
  render(){
    return (
      <Amount render={ amount => (
        <div>
          <Rupiah amount = {amount}/>
          <Dollar amount = {amount * 14000}/>
        </div>
      )}/>
    )
  }
}

function Rupiah(props) {
  return <h1> Rupiah = {props.amount}</h1>
}

function Dollar(props) {
  return <h1> Dollar = {props.amount}</h1>
}

export default App;
