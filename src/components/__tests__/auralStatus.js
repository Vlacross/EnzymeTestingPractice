import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import AuralStatus from '../aural-status';

describe('<AuralStatus />', () => {
  it('renders without crashing', () => {
    
    shallow(<AuralStatus />);
  });

  it('renders without crashing', () => {
    
    const wrapper = shallow(<AuralStatus />);
    
  });


})