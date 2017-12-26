import React, {PureComponent} from 'react';

import HelloWorld from 'components/helloWorld';

import {getMessage} from 'lib/api';

/**
 * @typedef {string} JSX
 */

/**
 * Example Container Component
 * Should only handle state changes / logic
 * not display
 */
class HelloWorldContainer extends PureComponent {
  /** @constructor */
  constructor() {
    super();
    this.state = {};
  }
  /**
   * Click Handler
   * to be passed as props to display component
   * calls some api to receive an object of (at least)
   * {
   *  title: {String}
   * }
   */
  loadMessage() {
    getMessage().then((response) => {
      return response.json();
    }).then((message) => {
      this.setState({
        message: message.title,
      });
    });
  }
  /**
   * @return {JSX}
   * renders HelloWorld component
   */
  render() {
    const props = {
      loadMessage: () => this.loadMessage(),
      message: this.state.message,
    };
    return <HelloWorld {...props} />;
  }
}

export default HelloWorldContainer;
