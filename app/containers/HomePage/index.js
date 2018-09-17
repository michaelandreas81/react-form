import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {
    activePanel,
    inputTelephoneNumber,
    inputGender,
    inputDateOfBirth,
    inputComments,
} from './actions';
import {
    makeSelectActivePanel,
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
    onChangeTelephoneNumber: (evt) => dispatch(inputTelephoneNumber(evt.target.value)),
    onChangeGender: (evt) => dispatch(inputGender(evt.target.value)),
    onChangeDateOfBirth: (evt) => dispatch(inputDateOfBirth(evt)),
    onChangeComments: (evt) => dispatch(inputComments(evt.target.value)),
    // onSubmitForm: (evt) => {
    //     // if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //
    //     const url = '/thank-you';
    //     const data = {firstName: 'example'};
    //
    //     fetch(url, {
    //         method: 'POST', // or 'PUT'
    //         body: JSON.stringify(data), // data can be `string` or {object}!
    //         headers:{
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => res.json())
    //         .then(response => console.log('Success:', JSON.stringify(response)))
    //         .catch(error => console.error('Error:', error));
    //     evt.preventDefault();
    // },
});

const mapStateToProps = createStructuredSelector({
    active: makeSelectActivePanel(),
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
