import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import AuralStatus from '../aural-status';

describe('<AuralStatus />', () => {

  it('should renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('should renders something', () => {
    const wrapper = shallow(<AuralStatus />);
    expect(wrapper).toBeDefined();
  });

  it('should renders AuralStatus passed from component props', () => {
    const mockStatus = 'mockStatus'
    const wrapper = shallow(<AuralStatus auralStatus={mockStatus}/>);
    expect(wrapper.props().children).toEqual(mockStatus)
  });

});
