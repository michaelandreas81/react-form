import { fromJS } from 'immutable';

import homeReducer from '../reducer';

describe('homeReducer', () => {
    let state;
    beforeEach(() => {
        state = fromJS({
            active: 1
        });
    });

    it('should return the initial state', () => {
        expect(homeReducer(undefined, {})).toEqual(state);
    });
});
