import React from 'react';
import { shallow } from 'enzyme';

import CustomButton from '../index';

describe('<CustomButton />', () => {
    it('should render CustomButton component', () => {
        const renderedComponent = shallow(<CustomButton />);
        expect(renderedComponent.length).toEqual(1);
    });
});
