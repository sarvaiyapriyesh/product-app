import React, { Component } from 'react';
import {BrowserRouter, Routes ,Route } from 'react-router-dom';
import Menubar from './Menubar';
import "bootstrap/dist/css/bootstrap.css";
import Customer from './Customer';
import ProdList from './ProdList';
import 'font-awesome/css/font-awesome.css';
import Login from './Login';
import Register from './Register';
import NOmatchFound from './NOmatchFound';
import UpdateCustomer from './UpdateCustomer';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn: false};
  }
  render() {
    return (
      <BrowserRouter>
        <Menubar isLoggedIn={this.state.isLoggedIn} />
        <Routes>
          <Route path ="/" exact element = { < Login updateIsLoggedInStatus={this.updateIsLoggedInStatus}/>} />
          <Route path ="/register" exact element = { <Register/>} />
          <Route path ="/card" exact element = { < ProdList />} />
          <Route path ="/cust" exact element = { < Customer />} />
          <Route path ="*" exact element = { < NOmatchFound/>} />
          <Route path="/update" exact element = {<UpdateCustomer/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
  updateIsLoggedInStatus = (status) => {
    this.setState({ isLoggedIn : status });
    console.log(this.state.isLoggedIn);
  };
}

export default App;
