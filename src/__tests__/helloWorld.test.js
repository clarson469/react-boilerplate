import React from 'react';
import {shallow} from 'enzyme';

import HelloWorld from 'components/helloWorld';

describe('<HelloWorld />', () => {

  const dummyProps = {
    loadMessage: jest.fn(),
    message: undefined,
  };

  it('Should display a default message', () => {
    const wrapper = shallow(<HelloWorld {...dummyProps} />);

    expect(wrapper.find('p').text()).toContain('Click for a message');
  });

  it('Should display a props message', () => {
    dummyProps.message = 'test message';
    const wrapper = shallow(<HelloWorld {...dummyProps} />);

    expect(wrapper.find('p').text()).toContain('test message');
  });

  it('Should trigger "loadMessage" on button click', () => {
    const wrapper = shallow(<HelloWorld {...dummyProps} />);

    wrapper.find('button').simulate('click');

    expect(dummyProps.loadMessage).toHaveBeenCalled();
  });

})
