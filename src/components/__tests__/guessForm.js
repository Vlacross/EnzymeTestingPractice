import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
/* 
Enzyme not yet compatible with React 17 so using unofficial Adapter
https://github.com/enzymejs/enzyme/issues/2429
// import Adapter from 'enzyme-adapter-react-16';
*/
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import GuessForm from '../guess-form';

describe('<GuessForm />', () => {
  it('renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('renders defined', () => {
    const wrapper = shallow(<GuessForm />);
    expect(wrapper).toBeDefined()
  });


  it('should create an instance of GuessForm component', () => {
    const wrapper = mount(<GuessForm />);
    const instance = wrapper.instance()
    expect(instance).toBeInstanceOf(GuessForm)
  });  

  it('should trigger an instance method', () => {
    /*https://github.com/airbnb/enzyme/issues/308    wasn't triggering submit with simulated click */
    const event = jest.fn();
    const wrapper = mount(<GuessForm onSubmit={event}/>);
    const instance = wrapper.instance()
    const spy = jest.spyOn(instance, 'onSubmit')
    const button = wrapper.find('button')
    button.simulate('submit')
    expect(spy).toHaveBeenCalled()
  });


});
