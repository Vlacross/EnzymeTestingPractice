import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Header from '../header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toBeDefined()
  });

  it('should render div with child component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header')).toHaveLength(1)
  });

  it('should render div with child component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header').children()).toHaveLength(2)
  });

});
