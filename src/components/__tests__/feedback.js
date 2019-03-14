import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Feedback from '../feedback';

describe('<Feedback />', () => {
  it('should renders without crashing', () => {
    shallow(<Feedback />);
  });

  it('should renders something', () => {
    const wrapper = shallow(<Feedback />);
    expect(wrapper).toBeDefined();
  });

  it('should render feedback via props', () => {
    const mockCount = 0;
    const mockFeed = 'mockFeed';
    const wrapper = shallow(<Feedback feedback={mockFeed} guessCount={mockCount} />);
    expect(wrapper.props().children[0]).toEqual(mockFeed)
  });

  it('should not say \'guess again\'', () => {
    const mockCount = 0;
    const mockFeed = 'mockFeed';
    const wrapper = shallow(<Feedback feedback={mockFeed} guessCount={mockCount} />);
    expect(wrapper.props().children[1]).toEqual(' ')
  });

  it('should say \'guess again\'', () => {
    const mockCount = 4;
    const mockFeed = 'mockFeed';
    const wrapper = shallow(<Feedback feedback={mockFeed} guessCount={mockCount} />);
    expect(wrapper.props().children[2].props.children).toEqual('Guess again!')
  });

});


