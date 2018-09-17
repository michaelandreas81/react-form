import React from 'react';
import { shallow } from 'enzyme';

import ThankYouPage from '../index';

describe('<ThankYouPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<ThankYouPage />);
    expect(renderedComponent.contains(<h1>Thank You</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<ThankYouPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
