import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import SmurfList from './SmurfList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={ SmurfList } />
        </div>
      </Router>
    );
  }
}

export default App;
