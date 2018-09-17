import { fromJS } from 'immutable';

import {
    makeSelectFirstName,
    selectHome,
} from '../selectors';

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

describe('makeSelectFirstName', () => {
    const firstNameSelector = makeSelectFirstName();
    it('should select the firstName', () => {
        const firstName = 'Michael';
        const mockedState = fromJS({
            home: {
                firstName,
            },
        });
        expect(firstNameSelector(mockedState))
            .toEqual(firstName);
    });
});
