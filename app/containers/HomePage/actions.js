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
    CREATE_POST,
} from './constants';

const ROOT_URL = 'http://localhost:3001';
const API_KEY = '?key=react-form';

/**
 * Changes Panel of the accordion
 *
 * @param  {active} active The active panel
 *
 * @return {{type: string, active: active}}    A action string with a type of ACTIVE_PANEL
 */
export function activePanel(active) {
    return {
        type: ACTIVE_PANEL,
        active,
    };
}

/**
 * Changes Panel of the accordion
 *
 * @param  {values} values of step1
 * @param  {step}   step
 * @param  {callback} callback
 *
 * @return {object}   A action object with a type of CREATE_POST
 */
export function createPost(values, step, callback) {
    const request = axios.post(`${ROOT_URL}/step${step}${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request,
    };
}
