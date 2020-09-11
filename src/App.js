import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Saftey from './Components/Saftey/Saftey';
import Symptoms from './Components/Symptoms/Symptoms';

export default class App extends Component {
  render() {
    return (  
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/saftey' component={Saftey}/>
        <Route exact path='/symptoms' component={Symptoms}/>
      </Switch>  
    </>
    )
  }
}
