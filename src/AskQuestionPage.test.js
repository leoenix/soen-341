import React from 'react';
import {shallow, mount} from 'enzyme';
import AskQuestionPage from './AskQuestionPage';

// test 1 
describe("rendering components", () => {
    it("renders App component without crashing", () => {
        const Wrapper = shallow(<AskQuestionPage/>);
        expect(Wrapper);
        ;
    });
});