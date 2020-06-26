import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Welcome status='success'/>
      <p>Konten</p>
      <Warning status='warning' />
    </div>
  );
}

function Welcome() {
  return (
    <Notification status='success'>
      <h1>Selamat Datang</h1>
      <p>Selamat Bergabung</p>
    </Notification>
  )
}

function Warning() {
  return (
    <Notification status='warning'>
      <p>Warning</p>
    </Notification>
  )
}

function Notification(props) {
  return(
    <div className={"notification is-"+ props.status} >
      {props.children}
    </div>
  )
}

export default App;
