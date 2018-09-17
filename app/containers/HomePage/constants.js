/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const ACTIVE_PANEL = 'boilerplate/Home/ACTIVE_PANEL';
export const FIRST_NAME = 'boilerplate/Home/FIRST_NAME';
export const SURNAME = 'boilerplate/Home/SURNAME';
export const EMAIL_ADDRESS = 'boilerplate/Home/EMAIL_ADDRESS';
export const TELEPHONE_NUMBER = 'boilerplate/Home/TELEPHONE_NUMBER';
export const GENDER = 'boilerplate/Home/GENDER';
export const DATE_OF_BIRTH = 'boilerplate/Home/DATE_OF_BIRTH';
export const COMMENTS = 'boilerplate/Home/COMMENTS';
export const STEP1_DATA = 'boilerplate/Home/STEP!_DATA';
