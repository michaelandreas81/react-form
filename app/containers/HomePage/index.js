import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {
    activePanel,
    inputFirstName,
    inputSurname,
    inputEmailAddress,
    inputTelephoneNumber,
    inputGender,
    inputDateOfBirth,
    inputComments,
    sendStep1Data,
} from './actions';
import {
    makeSelectActivePanel,
    makeSelectFirstName,
    makeSelectSurname,
    makeSelectEmailAddress,
    makeSelectTelephoneNumber,
    makeSelectGender,
    makeSelectDateOfBirth,
    makeSelectComments,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
    onChangeActivePanel: (active) => dispatch(activePanel(active)),
    onChangeFirstName: (evt) => dispatch(inputFirstName(evt.target.value)),
    onChangeSurname: (evt) => dispatch(inputSurname(evt.target.value)),
    onChangeEmailAddress: (evt) => dispatch(inputEmailAddress(evt.target.value)),
    onChangeTelephoneNumber: (evt) => dispatch(inputTelephoneNumber(evt.target.value)),
    onChangeGender: (evt) => dispatch(inputGender(evt.target.value)),
    onChangeDateOfBirth: (evt) => dispatch(inputDateOfBirth(evt)),
    onChangeComments: (evt) => dispatch(inputComments(evt.target.value)),
    sendStep1Data: (firstName, surname, emailAddress) => dispatch(sendStep1Data(firstName, surname, emailAddress)),
    onSubmitForm: (evt) => {
        // if (evt !== undefined && evt.preventDefault) evt.preventDefault();

        const url = '/thank-you';
        const data = {firstName: 'example'};

        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
        evt.preventDefault();
    },
});

const mapStateToProps = createStructuredSelector({
    active: makeSelectActivePanel(),
    firstName: makeSelectFirstName(),
    surname: makeSelectSurname(),
    emailAddress: makeSelectEmailAddress(),
    telephoneNumber: makeSelectTelephoneNumber(),
    gender: makeSelectGender(),
    dateOfBirth: makeSelectDateOfBirth(),
    comments: makeSelectComments(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({
    key: 'home',
    reducer,
});
const withSaga = injectSaga({
    key: 'home',
    saga,
});

export default compose(withReducer, withConnect)(HomePage);
export { mapDispatchToProps };
