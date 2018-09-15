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

import { CHANGE_USERNAME, ACTIVE_PANEL, FIRST_NAME, SURNAME, EMAIL_ADDRESS } from './constants';

// The initial state of the App
const initialState = fromJS({
    username: '',
    active: 1,
    firstName: '',
    surname: '',
    emailAddress: '',
});

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_USERNAME:
            // Delete prefixed '@' from the github username
            return state.set('username', action.name.replace(/@/gi, ''));
        case ACTIVE_PANEL:
            return state.set('active', action.active);
        case FIRST_NAME:
            return state.set('firstName', action.firstName);
        case SURNAME:
            return state.set('surname', action.surname);
        case EMAIL_ADDRESS:
            return state.set('email', action.emailAddress);
        default:
            return state;
    }
}

export default homeReducer;
