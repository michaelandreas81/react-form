/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectActivePanel = () => createSelector(
    selectHome,
    (homeState) => homeState.get('active'),
);

const makeSelectTelephoneNumber = () => createSelector(
    selectHome,
    (homeState) => homeState.getIn(['step2', 'telephoneNumber']),
);

const makeSelectGender = () => createSelector(
    selectHome,
    (homeState) => homeState.getIn(['step2', 'gender']),
);

const makeSelectDateOfBirth = () => createSelector(
    selectHome,
    (homeState) => homeState.getIn(['step2', 'dateOfBirth']),
);

const makeSelectComments = () => createSelector(
    selectHome,
    (homeState) => homeState.getIn(['step3', 'comments']),
);

export {
    selectHome,
    makeSelectActivePanel,
    makeSelectTelephoneNumber,
    makeSelectGender,
    makeSelectDateOfBirth,
    makeSelectComments,
};
