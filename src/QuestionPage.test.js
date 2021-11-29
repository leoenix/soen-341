import React from 'react';
import { shallow, mount } from 'enzyme';
import QuestionsPage from './QuestionsPage';

// test 9 
describe("rendering components", () => {
    it("renders App component without crashing", () => {
      const Wrapper = shallow(<QuestionsPage />);
      expect(Wrapper);;
    });
});