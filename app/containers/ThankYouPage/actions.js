/*
 * ThankYou Actions
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

import { FETCH_POST } from './constants';

const ROOT_URL = 'http://localhost:3001';
const API_KEY = '?key=react-form';


/**
 * Changes Panel of the accordion
 *
 * @param  {values} values of step1
 *
 * @return {object}   A action object with a type of CREATE_POST
 */
export function fetchPost(values) {
    const request = axios.get(`${ROOT_URL}/step1${API_KEY}`, values);

    return {
        type: FETCH_POST,
        payload: request,
    };
}
