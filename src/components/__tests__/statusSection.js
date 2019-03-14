import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import StatusSection from '../status-section';

describe('<StatusSection />', () => {
  it('renders without crashing', () => {
    shallow(<StatusSection guesses={[]} />);
  });

  it('renders something', () => {
    const wrapper = shallow(<StatusSection guesses={[]} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toBeDefined()
  });

  it('renders 3 child components', () => {
    const wrapper = shallow(<StatusSection guesses={[]} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.props().children.length).toEqual(3)
  });

  it('renders the proper components', () => {
    const wrapper = shallow(<StatusSection guesses={[]} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('GuessCount', 'GuessList', 'AuralStatus')).toBeTruthy()
  });


});
