import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import navbar from './navbar';
import Menubar from './Menubar';
import Customer from './Customer';

class App extends Component {
  render() {
    return (
      <div>
        <Menubar></Menubar>
        <Customer></Customer>
      </div>
    );
  }
}

export default App;
