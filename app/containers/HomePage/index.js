import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';

import { activePanel } from './actions';
import { makeSelectActivePanel } from './selectors';
import reducer from './reducer';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
    onChangeActivePanel: (active) => dispatch(activePanel(active)),
});

const mapStateToProps = createStructuredSelector({
    active: makeSelectActivePanel(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({
    key: 'home',
    reducer,
});

export default compose(withReducer, withConnect)(HomePage);
export { mapDispatchToProps };
