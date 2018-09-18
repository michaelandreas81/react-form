import React from 'react';
import { shallow } from 'enzyme';

import PanelHeader from '../index';

describe('<PanelHeader />', () => {
    it('should render PanelHeader component', () => {
        const renderedComponent = shallow(<PanelHeader title="title" />);
        expect(renderedComponent.length).toEqual(1);
    });
});
