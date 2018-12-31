import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import QuestionContainer from '.';

const store = configureStore([thunk])({});

describe('handle Invoke signup', () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <QuestionContainer />
      </MemoryRouter>,
    );
  });
  test('', () => {
    const wrapper = shallow(<QuestionContainer store={store} />);
    const event = { target: { id: 12, value: '' } };
    expect(wrapper.instance().handleText(event));
  });

  it('should submit user display_name and password', () => {
    component.find('input#question').simulate('change', { target: { id: 'question', value: '' } });
    component.find('form').simulate('submit');
  });
});
