import React from 'react';
import {shallow, mount} from 'enzyme';
import SignUpPage from './SignUpPage';

// test 7
describe("rendering components", () => {
    it("renders App component without crashing", () => {
        const Wrapper = shallow(<SignUpPage/>);
        expect(Wrapper);
        ;
    });
});

// test 8 
describe('Function testing in singup page', () => {
    it('should be handling checkboxChecked', () => {
        const Wrapper = shallow(<SignUpPage/>);
        expect((Wrapper.instance().signup()));

    });
});