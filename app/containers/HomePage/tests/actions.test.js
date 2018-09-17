import { EMAIL_ADDRESS, FIRST_NAME, SURNAME } from '../constants';

import { inputEmailAddress, inputFirstName, inputSurname } from '../actions';

describe('Home Actions', () => {
    describe('inputFirstName', () => {
        it('should return the correct type and the passed firstName', () => {
            const firstName = 'Michael';
            const expectedResult = {
                type: FIRST_NAME,
                firstName
            };

            expect(inputFirstName(firstName)).toEqual(expectedResult);
        });
    });

    describe('inputSurname', () => {
        it('should return the correct type and the passed surname', () => {
            const surname = 'Andreas';
            const expectedResult = {
                type: SURNAME,
                surname
            };

            expect(inputSurname(surname)).toEqual(expectedResult);
        });
    });

    describe('inputEmailAddress', () => {
        it('should return the correct type and the passed emailAddress', () => {
            const emailAddress = 'mikey_and@hotmail.com';
            const expectedResult = {
                type: EMAIL_ADDRESS,
                emailAddress
            };

            expect(inputEmailAddress(emailAddress)).toEqual(expectedResult);
        });
    });

});
