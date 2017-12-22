import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';

import App from 'app';

describe('<App />', () => {
  test('Should render ok', () => {
    const wrapper = shallow(<App />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
