/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
    ACTIVE_PANEL,
    CHANGE_USERNAME,
    COMMENTS,
    DATE_OF_BIRTH,
    EMAIL_ADDRESS,
    FIRST_NAME,
    GENDER,
    SURNAME,
    TELEPHONE_NUMBER,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(name) {
    return {
        type: CHANGE_USERNAME,
        name,
    };
}

/**
 * Changes Panel of the accordion
 *
 * @param  {active} active The active panel
 *
 * @return {number}    A action number with a type of ACTIVE_PANEL
 */
export function activePanel(active) {
    return {
        type: ACTIVE_PANEL,
        active,
    };
}

/**
 * Changes the input field of the form
 *
 * @param  {firstName} firstName The new text of the input field
 *
 * @return {text}    A action text with a type of FIRST_NAME
 */
export function inputFirstName(firstName) {
    return {
        type: FIRST_NAME,
        firstName,
    };
}

/**
 * Changes the input field of the form
 *
 * @param  {surname} surname The new text of the input field
 *
 * @return {text}    A action text with a type of FIRST_NAME
 */
export function inputSurname(surname) {
    return {
        type: SURNAME,
        surname,
    };
}

/**
 * Changes the input field of the form
 *
 * @param  {emailAddress} emailAddress The new text of the input field
 *
 * @return {text}    A action text with a type of EMAIL_ADDRESS
 */
export function inputEmailAddress(emailAddress) {
    return {
        type: EMAIL_ADDRESS,
        emailAddress,
    };
}

/**
 * Changes the input field of the form
 *
 * @param  {telephoneNumber} telephoneNumber The new text of the input field
 *
 * @return {number}    A action number with a type of TELEPHONE_NUMBER
 */
export function inputTelephoneNumber(telephoneNumber) {
    return {
        type: TELEPHONE_NUMBER,
        telephoneNumber,
    };
}

/**
 * Changes the input field of the form
 *
 * @param  {gender} gender The new text of the input field
 *
 * @return {text}    A action text with a type of GENDER
 */
export function inputGender(gender) {
    return {
        type: GENDER,
        gender,
    };
}

/**
 * Changes the input field of the form
 *
 * @param  {dateOfBirth} dateOfBirth The new text of the input field
 *
 * @return {number}    A action number with a type of DATE_OF_BIRTH
 */
export function inputDateOfBirth(dateOfBirth) {
    return {
        type: DATE_OF_BIRTH,
        dateOfBirth,
    };
}

/**
 * Changes the input field of the form
 *
 * @param  {comments} comments The new text of the input field
 *
 * @return {text}    A action text with a type of COMMENTS
 */
export function inputComments(comments) {
    return {
        type: COMMENTS,
        comments,
    };
}
