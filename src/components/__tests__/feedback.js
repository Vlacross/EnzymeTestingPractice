import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Feedback from '../feedback';

describe('<Feedback />', () => {
  it('renders without crashing', () => {
    shallow(<Feedback />);
  });

  it('renders something', () => {
    const wrapper = shallow(<Feedback />);
    expect(wrapper).toBeDefined();
  });

})


