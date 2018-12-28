import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';

describe('renders header', () => {
  it('renders header without fail', () => {
    shallow(<Header />);
  });
});
