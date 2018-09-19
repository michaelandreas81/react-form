import { fromJS } from 'immutable';

import { makeSelectActivePanel, selectHome } from '../selectors';

describe('selectHome', () => {
    it('should select the home state', () => {
        const homeState = fromJS({
            userData: {},
        });
        const mockedState = fromJS({
            home: homeState,
        });
        expect(selectHome(mockedState))
            .toEqual(homeState);
    });
});

describe('makeSelectActivePanel', () => {
    const activeSelector = makeSelectActivePanel();
    it('should select the firstName', () => {
        const active = 1;
        const mockedState = fromJS({
            home: {
                active,
            },
        });
        expect(activeSelector(mockedState)).toEqual(1);
    });
});
