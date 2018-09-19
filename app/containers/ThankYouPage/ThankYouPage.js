import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPost } from './actions';

import './style.scss';

class ThankYouPage extends React.Component {
    componentDidMount() {
        this.props.fetchPost();
    }

    render() {
        console.log(this.props.post);
        return (
            <div className="thank-you-page">
                <h1 style={{ padding: 50 }}>Thank You</h1>

                <div className="wrapper">
                    <div className="box">First name</div>
                    <div className="box">Surname</div>
                    <div className="box">Email Address</div>
                    <div className="box">Telephone Number</div>
                    <div className="box">Gender</div>
                    <div className="box">Date of birth</div>
                    <div className="box">Comments</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.posts };
}

ThankYouPage.propTypes = {
    post: PropTypes.object,
    fetchPost: PropTypes.func,
};

export default connect(mapStateToProps, { fetchPost })(ThankYouPage);
