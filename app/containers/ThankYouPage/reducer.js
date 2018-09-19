/*
 * ThankYouReducer
 */

import { fromJS } from 'immutable';
import _ from 'lodash';
import { FETCH_POST } from './constants';

// The initial state
const initialState = fromJS({
    post: '',
});

function thankYouReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POST:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}

export default thankYouReducer;
