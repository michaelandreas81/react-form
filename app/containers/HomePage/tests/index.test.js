/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../HomePage';
import Step1 from '../Steps/Step1';
import Step2 from '../Steps/Step2';
import Step3 from '../Steps/Step3';


describe('<HomePage />', () => {
    it('should render Step1', () => {
        const renderedComponent = shallow(<HomePage active={1} />);
        expect(renderedComponent.find(Step1).length).toBe(1);
    });

    it('should render Step2', () => {
        const renderedComponent = shallow(<HomePage active={1} />);
        expect(renderedComponent.find(Step2).length).toBe(1);
    });

    it('should render Step3', () => {
        const renderedComponent = shallow(<HomePage active={1} />);
        expect(renderedComponent.find(Step3).length).toBe(1);
    });
});
