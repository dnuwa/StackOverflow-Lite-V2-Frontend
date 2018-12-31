
import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import LoginContainer from './index';

const store = configureStore([thunk])({});

describe('handle Invoke login', () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <LoginContainer />
      </MemoryRouter>,
    );
  });
  test('', () => {
    const wrapper = shallow(<LoginContainer store={store} />);
    const event = { target: { id: 12, value: '' } };
    expect(wrapper.instance().handleChange(event));
  });

  it('should submit user display_name and password', () => {
    component.find('input#displayName').simulate('change', { target: { id: 'displayName', value: '' } });
    component.find('form').simulate('submit');
  });
});
