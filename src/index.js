import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from 'app';

import './index.css';


/** @typedef {object} Component */

/**
 * @param {Component} Component
 * Wraps given component in react-hot-loader AppContainer
 * before passing to ReactDOM
 */
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

/**
 * allows hot reloading in non-production environment
 */
if (module.hot) {
  module.hot.accept('app', () => render(App));
}
