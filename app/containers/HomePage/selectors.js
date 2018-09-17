/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectActivePanel = () => createSelector(
    selectHome,
    (homeState) => homeState.get('active'),
);

const makeSelectFirstName = () => createSelector(
    selectHome,
    (homeState) => homeState.getIn(['step1', 'firstName']),
);

const makeSelectSurname = () => createSelector(
    selectHome,
    (homeState) => homeState.getIn(['step1', 'surname']),
);

const makeSelectEmailAddress = () => createSelector(
    selectHome,
    (homeState) => homeState.getIn(['step1', 'emailAddress']),
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
    makeSelectFirstName,
    makeSelectSurname,
    makeSelectEmailAddress,
    makeSelectTelephoneNumber,
    makeSelectGender,
    makeSelectDateOfBirth,
    makeSelectComments,
};
