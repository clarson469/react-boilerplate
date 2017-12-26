import React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef {string} JSX
 * @typedef {object} Props -> see PropTypes below
 */

/**
 * Example Display Component
 * renders button and p to display api response
 * @param {Props} props
 * @return {JSX}
 */
const HelloWorld = (props) => {
  return (
    <section>
      <button onClick={() => props.loadMessage()}>
       Click Me
     </button>
     <p>{`Your message is: ${props.message}`}</p>
    </section>
  );
};

HelloWorld.defaultProps = {
  message: 'Click for a message',
};

HelloWorld.propTypes = {
  loadMessage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default HelloWorld;
