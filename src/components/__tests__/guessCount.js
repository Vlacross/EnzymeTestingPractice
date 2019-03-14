import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import GuessCount from '../guess-count';

describe('<GuessCount />', () => {
  it('renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('renders something', () => {
    const wrapper = shallow(<GuessCount />);
    expect(wrapper).toBeDefined()
  });

  it('sets isPlural to single', () => {
    const wrapper = shallow(<GuessCount guessCount={1}/>);
    expect(wrapper.find('h2').prop('children')[3]).toEqual('guess')
  });

  it('sets isPlural to plural', () => {
    const wrapper = shallow(<GuessCount guessCount={2}/>);
    expect(wrapper.find('h2').prop('children')[3]).toEqual('guesses')
  });

  it('assigns child props based on parent prop', () => {
    const mockCount = 42
    const wrapper = shallow(<GuessCount guessCount={mockCount}/>);
    expect(wrapper.find('#count').prop('children')).toEqual(mockCount)
  });




});
