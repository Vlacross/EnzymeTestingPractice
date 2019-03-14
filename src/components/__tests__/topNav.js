import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import TopNav from '../top-nav';

describe('<TopNav />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<TopNav />);
    expect(wrapper).toBeDefined()
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<TopNav />);
    expect(wrapper.find('ul').children()).toHaveLength(3)
  });

  it('renders without crashing', () => {
    const click = jest.fn()
    const wrapper = mount(<TopNav onGenerateAuralUpdate={click} />);
    // wrapper.find('.visuallyhidden')
    // console.log(wrapper.prop('onGenerateAuralUpdate'))
    wrapper.find('a.visuallyhidden').simulate('click')
    // wrapper.find('').simulate('click')
   expect(click).toHaveBeenCalled()
  });




});

