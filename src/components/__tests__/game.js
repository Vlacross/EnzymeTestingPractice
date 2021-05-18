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

import Game from '../game';

describe('<Game />', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper).toBeDefined()
  });

  it('should render div with child components', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find("div")).toHaveLength(1)
  });

  it('should render main with 3 children nodes', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find('main').children()).toHaveLength(3)
  });

  it('should render Header component', () => {
    const wrapper = shallow(<Game />); 
    expect(wrapper.find('Header')).toBeTruthy()
  });

  it('should render 3 child components', () => {
    const wrapper = shallow(<Game />);  
    expect(wrapper.find('InfoSection', 'StatusSection', 'GuessSection')).not.toBeFalsy()
  });

  it('should create an instance of Game component', () => {
    const wrapper = mount(<Game />);
    const instance = wrapper.instance()
    expect(instance).toBeInstanceOf(Game)
  });  

  it('should trigger makeGuess', () => {
    const wrapper = mount(<Game />);
    const instance = wrapper.instance()
    const spy = jest.spyOn(instance, 'makeGuess')
    instance.makeGuess()
    expect(spy).toHaveBeenCalled()
  });

  it('should trigger makeGuess with a string', () => {
    const wrapper = mount(<Game />);
    const instance = wrapper.instance()
    instance.makeGuess('str')
    expect(wrapper.state('feedback')).toEqual('Please enter a valid number')
  });

  it('should trigger generateAuralUpdate', () => {
    const wrapper = mount(<Game />);
    const instance = wrapper.instance()
    const spy = jest.spyOn(instance, 'generateAuralUpdate')
    const cb = jest.fn()
    wrapper.find('Header').prop('onGenerateAuralUpdate')(cb)
    expect(spy).toHaveBeenCalled()
  });

  it('should trigger restartGame', () => {
    const wrapper = mount(<Game />);
    const instance = wrapper.instance()
    const spy = jest.spyOn(instance, 'restartGame')
    const cb = jest.fn()
    wrapper.find('Header').prop('onRestartGame')(cb)
    expect(spy).toHaveBeenCalled()
  });

  it('should manipulate the state', () => {
    const wrapper = mount(<Game />);
    const newFeedBack = 'newFB';

  wrapper.setState({
    feedback: newFeedBack
  })
  expect(wrapper.state('feedback')).toEqual(newFeedBack)
  });

  it('should reflect altered state in child props', () => {
    const wrapper = mount(<Game />);
    
    const newGuesses = ['42']
  wrapper.setState({
    guesses: newGuesses
  });
  expect(wrapper.find('StatusSection').prop('guesses')).toEqual(newGuesses)
  });

});


