import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import { inputEmailAddress, inputFirstName, inputSurname } from '../actions';

describe('homeReducer', () => {
    let state;
    beforeEach(() => {
        state = fromJS({
            active: 1,
            step1: {
                firstName: '',
                surname: '',
                emailAddress: '',
            },
            step2: {
                telephoneNumber: '',
                gender: '',
                dateOfBirth: '',
            },
            step3: {
                comments: '',
            },
        });
    });

    it('should return the initial state', () => {
        expect(homeReducer(undefined, {}))
            .toEqual(state);
    });

    it('should handle the inputFirstName action correctly', () => {
        const firstName = 'Michael';
        const expectedResult = state.setIn(['step1', 'firstName'], firstName);

        expect(homeReducer(state, inputFirstName(firstName)))
            .toEqual(expectedResult);
    });

    it('should handle the inputSurname action correctly', () => {
        const surname = 'Andreas';
        const expectedResult = state.setIn(['step1', 'surname'], surname);

        expect(homeReducer(state, inputSurname(surname)))
            .toEqual(expectedResult);
    });

    it('should handle the inputEmailAddress action correctly', () => {
        const emailAddress = 'mikey_and@hotmail.com';
        const expectedResult = state.setIn(['step1', 'emailAddress'], emailAddress);

        expect(homeReducer(state, inputEmailAddress(emailAddress)))
            .toEqual(expectedResult);
    });
});
