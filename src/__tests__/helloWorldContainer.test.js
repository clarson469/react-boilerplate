import React from 'react';
import {mount, shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import 'whatwg-fetch';

import HelloWorldContainer from 'containers/helloWorldContainer';

const url = 'https://jsonplaceholder.typicode.com/posts/1';
const title = 'test message';
const mockResponse = (status, statusText, response) => {
  return new Response(response, {
    status: status,
    statusText: statusText,
    headers: new Headers({
      'Content-Type': 'application.json',
    }),
  })
};

describe('<HelloWorldContainer />', () => {

  it('should call jsonplaceholder api on child click', () => {

    const fakePromise = Promise.resolve(mockResponse(
      200,
      null,
      JSON.stringify({title: title})
    ));

    window.fetch = jest.fn().mockImplementationOnce(() => {
      return fakePromise;
    });

    const wrapper = mount(<HelloWorldContainer />);

    expect.assertions(2);
    wrapper.find('HelloWorld')
      .find('button')
      .simulate('click');
    Promise.all([fakePromise]).then(() => {
      expect(window.fetch).toHaveBeenCalled();
    }).then(() => {
      expect(window.fetch.mock.calls[0][0]).toEqual(url);
    });
  });

  it('should update state with API response after child click', (done) => {

    const fakePromise = Promise.resolve(mockResponse(
      200,
      null,
      JSON.stringify({title: title})
    ));

    window.fetch = jest.fn().mockImplementationOnce(() => {
      return fakePromise;
    });

    const wrapper = mount(<HelloWorldContainer />);

    expect.assertions(1);
    wrapper.find('HelloWorld')
      .find('button')
      .simulate('click');

    setTimeout(() => {
      Promise.all([fakePromise]).then(() => {
        expect(wrapper.update().state().message).toEqual(title);
        done();
      });
    }, 4000);
  });

  it('should render HelloWorld', () => {
    const wrapper = shallow(<HelloWorldContainer />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  })

});
