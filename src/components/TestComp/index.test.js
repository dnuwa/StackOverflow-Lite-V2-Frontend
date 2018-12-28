import React from 'react';
import { shallow } from 'enzyme';
import Home from '.';

describe('renders Home', () => {
  it('renders Home without fail', () => {
    shallow(<Home />);
  });
});
