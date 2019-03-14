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

  it('renders with 3 child elements', () => {
    const wrapper = shallow(<TopNav />);
    expect(wrapper.find('ul').children()).toHaveLength(3)
  });

  it('element prop click triggers component prop callback', () => {
    const callBack = jest.fn()
    const wrapper = shallow(<TopNav onGenerateAuralUpdate={callBack} />);
    wrapper.find('a.visuallyhidden').simulate('click')
   expect(callBack).toHaveBeenCalled()
  });

  it('element prop click triggers component prop callback', () => {
    const callBack = jest.fn()
    const wrapper = shallow(<TopNav onRestartGame={callBack} />);
    wrapper.find('a.new').simulate('click')
   expect(callBack).toHaveBeenCalled()
  });



});

