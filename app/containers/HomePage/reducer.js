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
    ACTIVE_PANEL,
    TELEPHONE_NUMBER,
    GENDER,
    DATE_OF_BIRTH,
    COMMENTS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
    active: 1,
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
        case ACTIVE_PANEL:
            return state.set('active', action.active);
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
