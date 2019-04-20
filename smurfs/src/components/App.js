import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import SmurfList from './SmurfList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Smurf Village</h1>
          <Route path="/" component={ SmurfList } />
        </div>
      </Router>
    );
  }
}

export default App;
