import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
// test 10 
describe("rendering components", () => {
    it("renders App component without crashing", () => {
      const Wrapper = shallow(<App />);
      expect(Wrapper);;
    });
});