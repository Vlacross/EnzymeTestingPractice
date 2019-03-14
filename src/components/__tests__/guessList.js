import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import GuessList from '../guess-list';

describe('<GuessList />', () => {
  it('renders without crashing', () => {
    shallow(<GuessList guesses={[]} />);
  });

  it('renders something', () => {
    const wrapper = shallow(<GuessList guesses={[]} />);
    expect(wrapper).toBeDefined();
  });

  it('render listings with values passed br props', () => {
    const mockGuess = 42
    const wrapper = shallow(<GuessList guesses={[mockGuess]} />);
    expect(wrapper.find('#guessList').prop('children')[0].props.children).toEqual(mockGuess)
  });

  it('should render listings for number up guess passed in props', () => {
    const mockArr = [22, 23, 32, 33]
    const wrapper = shallow(<GuessList guesses={mockArr} />);
    expect(wrapper.props().children.length).toEqual(mockArr.length)

  });

});
