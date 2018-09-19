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

import { ACTIVE_PANEL } from './constants';

// The initial state of the App
const initialState = fromJS({
    active: 1,
});

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIVE_PANEL:
            return state.set('active', action.active);
        default:
            return state;
    }
}

export default homeReducer;
