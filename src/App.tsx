import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import Chatwebsocket from './components/Chatwebsocket/Chatwebsocket';
function App() {
  return (
    /*
    <>
      <div className="tablero">
        <div className="fila">
          <Button texto="example" color=""/>
          <Button texto="example" color=""/>
          <Button texto="example" color=""/>
        </div>
        <div className="fila">
          <Button texto="example" color=""/>
          <Button texto="example" color=""/>
          <Button texto="example" color=""/>
        </div>
        <div className="fila">
          <Button texto="example" color=""/>
          <Button texto="example" color=""/>
          <Button texto="example" color=""/>
        </div>
      </div>
    </>*/
    <>
    <Chatwebsocket></Chatwebsocket>
    </>
  );
}

export default App;
