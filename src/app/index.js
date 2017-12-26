import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import HelloWorldContainer from 'containers/helloWorldContainer';

/**
 * @typedef {string} JSX
 */

/**
  * Parent Component
  */
class App extends Component {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.state = {};
  }
  /**
   * @return {JSX}
   */
  render() {
    return (
      <Router>
        <main id='main-wrapper'>
          <HelloWorldContainer />
        </main>
      </Router>
    );
  }
}

export default App;
