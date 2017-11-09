import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Router>
        <main id='main-wrapper'></main>
      </Router>
    );
  }
}

export default App;
