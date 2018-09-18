/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectActivePanel = () => createSelector(
    selectHome,
    (homeState) => homeState.get('active'),
);

export {
    selectHome,
    makeSelectActivePanel,
};
