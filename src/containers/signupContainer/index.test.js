import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SiginUpContainer from './index';

const store = configureStore([thunk])({});

describe('handle Invoke email for password reset', () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <SiginUpContainer />
      </MemoryRouter>,
    );
  });
  test('', () => {
    const wrapper = shallow(<SiginUpContainer store={store} />);
    const event = { target: { id: 12, value: '' } };
    expect(wrapper.instance().handleChange(event));
  });

  it('should submit user display_name and password', () => {
    component.find('input#dname').simulate('change', { target: { id: 'dname', value: '' } });
    component.find('form').simulate('submit');
  });
});
