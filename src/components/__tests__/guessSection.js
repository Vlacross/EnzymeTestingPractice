import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import GuessSection from '../guess-section';

describe('<GuessSection />', () => {
  it('renders without crashing', () => {
    shallow(<GuessSection />);
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<GuessSection />);
    expect(wrapper).toBeDefined();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<GuessSection />);
    expect(wrapper.find('Feedback', 'GuessForm')).toBeTruthy()
  });

});

