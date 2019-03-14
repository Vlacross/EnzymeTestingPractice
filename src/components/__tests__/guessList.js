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
})