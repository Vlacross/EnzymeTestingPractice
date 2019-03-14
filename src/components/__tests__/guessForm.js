import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import GuessForm from '../guess-form';

describe('<GuessForm />', () => {
  it('renders without crashing', () => {
    shallow(<GuessForm />);
  });
})