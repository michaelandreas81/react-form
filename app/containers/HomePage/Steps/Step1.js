import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';
import * as EmailValidator from 'email-validator';
import { Form, Panel, FormGroup, ControlLabel } from 'react-bootstrap';

import { createPost } from '../actions';

import CustomButton from '../../../components/CustomButton/CustomButton';
import AddressSearch from '../../../components/AddressSearch/AddressSearch';
import PanelHeader from '../../../components/PanelHeader/PanelHeader';


class Step1 extends React.PureComponent {
    static renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-error' : ''}`;

        return (
            <div className={className}>
                <label className="control-label">{field.label}</label>
                <input
                    className="form-control"
                    type={field.type}
                    style={field.style}
                    {...field.input}
                />
                <div className="error-text">{touched ? error : ''}</div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, 1, () => {
            this.props.onChangeActivePanel(2);
            console.log(values);
        });
    }

    render() {
        const { handleSubmit, expanded } = this.props;

        return (
            <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Panel eventKey="1" expanded={expanded} onToggle>
                    <PanelHeader title="Step 1: Your details"/>

                    <Panel.Collapse>
                        <Panel.Body collapsible>
                            <div className="form-wrapper">

                                <Field
                                    label="First Name"
                                    name="firstName"
                                    component={Step1.renderField}
                                />

                                <Field
                                    label="Surname"
                                    name="surname"
                                    component={Step1.renderField}
                                />

                                <div/>

                                <Field
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    component={Step1.renderField}
                                    style={{ gridColumnStart: 1 }}
                                />

                                <CustomButton />

                                <FormGroup>
                                    <ControlLabel>Home Address:</ControlLabel>
                                    <AddressSearch/>
                                </FormGroup>
                            </div>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
            </Form>
        );
    }
}

function validate(values) {
    const errors = {};

    // Validate the inputs from 'values'
    if (!values.firstName || values.firstName.length < 2) {
        errors.firstName = 'Invalid first name';
    }

    if (!values.surname || values.surname.length < 2) {
        errors.surname = 'Invalid surname';
    }

    if (!EmailValidator.validate(values.email)) {
        errors.email = 'Invalid email';
    }

    // If errors is empty, the form is fine to submit
    return errors;
}

Step1.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    expanded: PropTypes.bool.isRequired,
    createPost: PropTypes.func.isRequired,
    onChangeActivePanel: PropTypes.func.isRequired,
};

export default reduxForm({
    validate,
    form: 'Step1Form',
})(
    connect(null, { createPost })(Step1)
);
