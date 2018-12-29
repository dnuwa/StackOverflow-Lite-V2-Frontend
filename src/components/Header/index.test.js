import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';

describe('renders Header', () => {
  it('renders Header without fail', () => {
    shallow(<Header />);
  });
});
