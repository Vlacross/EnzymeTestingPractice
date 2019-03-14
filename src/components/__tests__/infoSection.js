import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import InfoSection from '../info-section';

describe('<Game />', () => {
  it('renders without crashing', () => {
    shallow(<InfoSection />);
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<InfoSection />);
    expect(wrapper).toBeDefined();
  });

  it('renders 4 elements', () => {
    const wrapper = shallow(<InfoSection />);
    expect(wrapper.props().children.length).toEqual(4);
  });

});
