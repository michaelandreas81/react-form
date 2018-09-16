/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
    CHANGE_USERNAME,
    ACTIVE_PANEL,
    FIRST_NAME,
    SURNAME,
    EMAIL_ADDRESS,
    TELEPHONE_NUMBER,
    GENDER, DATE_OF_BIRTH, COMMENTS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
    username: '',
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
        comments: ''
    }
});

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_USERNAME:
            // Delete prefixed '@' from the github username
            return state.set('username', action.name.replace(/@/gi, ''));
        case ACTIVE_PANEL:
            return state.set('active', action.active);
        case FIRST_NAME:
            return state.setIn(['step1', 'firstName'], action.firstName);
        case SURNAME:
            return state.setIn(['step1', 'surname'], action.surname);
        case EMAIL_ADDRESS:
            return state.setIn(['step1', 'emailAddress'], action.emailAddress);
        case TELEPHONE_NUMBER:
            return state.setIn(['step2', 'telephoneNumber'], action.telephoneNumber);
        case GENDER:
            return state.setIn(['step2', 'gender'], action.gender);
        case DATE_OF_BIRTH:
            return state.setIn(['step2', 'dateOfBirth'], action.dateOfBirth);
        case COMMENTS:
            return state.setIn(['step3', 'comments'], action.comments);
        default:
            return state;
    }
}

export default homeReducer;
