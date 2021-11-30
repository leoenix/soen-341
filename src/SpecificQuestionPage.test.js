import React from 'react';
import {shallow, mount} from 'enzyme';
import SpecificQuestionPage from './SpecificQuestionPage';

// test 2 
describe("rendering components", () => {
    it("renders App component without crashing", () => {
        const Wrapper = shallow(<SpecificQuestionPage/>);
        expect(Wrapper);
        ;
    });
});

// test 3 
describe('Function testing in singup page', () => {
    it('should be handling checkboxChecked', () => {
        const Wrapper = shallow(<SpecificQuestionPage/>);
        expect((
            () =>
                Wrapper.instance().postAnswer()

        ));

    });
});

// test 4 
describe('Function testing in singup page', () => {
    it('should be handling checkboxChecked', () => {
        const Wrapper = shallow(<SpecificQuestionPage/>);
        expect((
            () =>
                Wrapper.instance().postComment()
        ));

    });
});

// test 5 
describe('Function testing in singup page', () => {
    it('should be handling checkboxChecked', () => {
        const Wrapper = shallow(<SpecificQuestionPage/>);
        expect((
            () => {
                if (Wrapper.instance().equal(null)) {
                    return true;
                } else {
                    Wrapper.instance().handleOnUpvote()
                }
            }
        ));

    });
});

// test 6 
describe('Function testing in singup page', () => {
    it('should be handling checkboxChecked', () => {
        const Wrapper = shallow(<SpecificQuestionPage/>);
        expect((
            () => {
                if (Wrapper.instance().equal(null)) {
                    return true;
                } else {
                    Wrapper.instance().handleOnDownVote()
                }
            }
        ));

    });
});