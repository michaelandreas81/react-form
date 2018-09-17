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
import axios from 'axios';

import {
    ACTIVE_PANEL,
    COMMENTS, CREATE_POST,
    DATE_OF_BIRTH,
    GENDER,
    TELEPHONE_NUMBER,
} from './constants';

const ROOT_URL = '';
const API_KEY = '';

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

export function createPost(values) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

    return {
        type: CREATE_POST,
        payload: request,
    }
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
 * @return {string}    A action string with a type of GENDER
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
 * @return {string}    A action string with a type of DATE_OF_BIRTH
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
 * @return {string}    A action string with a type of COMMENTS
 */
export function inputComments(comments) {
    return {
        type: COMMENTS,
        comments,
    };
}

export function sendStep1Data(firstName, surname, emailAddress) {
    return {
        type: STEP1_DATA,
        firstName,
        surname,
        emailAddress,
    };
}
