import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RedBorderedComponent from './Components/RedBorderedComponent';
import NamesListComponent from './Components/NamesListComponent';
import NamesLineComponent from './Components/NamesLineComponent';

class App extends Component {
  render() {
    // return <RedBorderedComponent/>
    // return <NamesListComponent />
    return <NamesLineComponent />
  }
}

export default App;
