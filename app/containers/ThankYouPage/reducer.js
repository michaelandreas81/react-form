/*
 * ThankYouReducer
 */

import { fromJS } from 'immutable';
import _ from 'lodash';
import { FETCH_POST } from './constants';

// The initial state
const initialState = fromJS({
    id: 'hi',
});

function thankYouReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POST:
            return console.log(_.mapKeys(action.payload.data, 'id'));
        default:
            return state;
    }
}

export default thankYouReducer;
