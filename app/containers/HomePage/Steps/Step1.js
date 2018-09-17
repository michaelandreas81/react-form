import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import * as EmailValidator from 'email-validator';
import { Form, Panel, FormGroup, ControlLabel } from 'react-bootstrap';

import CustomButton from '../../../components/CustomButton/CustomButton';
import AddressSearch from '../../../components/AddressSearch/AddressSearch';
import FormInput from '../../../components/FormInput/FormInput';


class Step1 extends React.PureComponent {
    constructor(props) {
        super(props);

        this.validate = this.validate.bind(this);
    }

    validate() {
        const { firstName, surname, emailAddress } = this.props.props;

        const name = firstName.length && surname.length >= 1;
        const email = EmailValidator.validate(emailAddress);

        if (email && name) {
            this.props.onChangeActivePanel(2);
        }
    }

    static getValidationText(value) {
        const length = value.length;
        if (length > 1) {
            return 'success';
        } else if (length > 0) return 'error';
        return null;
    }

    static getValidationEmail(value) {
        const length = value.length;
        const email = EmailValidator.validate(value);
        if (email) {
            return 'success';
        } else if (length > 0) return 'error';
        return null;
    }

    renderField(field) {
        return (
            <div className="form-group has-danger">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type={field.type}
                    {...field.input}
                />
                <div className="text-help">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Panel eventKey="1" expanded={this.props.expanded} onToggle>
                    <Panel.Heading>
                        <Panel.Title>Step 1: Your details</Panel.Title>
                    </Panel.Heading>

                    <Panel.Collapse>
                        <Panel.Body collapsible>
                            <div className="form-wrapper">

                                <Field
                                    label="First Name"
                                    name="firstName"
                                    component={this.renderField}
                                />

                                <Field
                                    label="Surname"
                                    name="surname"
                                    component={this.renderField}
                                />

                                <Field
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    component={this.renderField}
                                />

                                {/*<FormInput*/}
                                {/*label="First Name"*/}
                                {/*value={firstName}*/}
                                {/*onChange={this.props.props.onChangeFirstName}*/}
                                {/*validationState={Step1.getValidationText(firstName)}*/}
                                {/*/>*/}

                                {/*<FormInput*/}
                                {/*label="Surname"*/}
                                {/*value={surname}*/}
                                {/*onChange={this.props.props.onChangeSurname}*/}
                                {/*validationState={Step1.getValidationText(surname)}*/}
                                {/*/>*/}

                                {/*<FormInput*/}
                                {/*label="Email Address:"*/}
                                {/*value={emailAddress}*/}
                                {/*onChange={this.props.props.onChangeEmailAddress}*/}
                                {/*validationState={Step1.getValidationEmail(emailAddress)}*/}
                                {/*style={{ gridColumnStart: 1 }}*/}
                                {/*/>*/}

                                <CustomButton onClick={this.validate} type="submit"/>

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
    if (!values.firstName || values.firstName.length < 3) {
        errors.firstName = 'First name must be more than 3 character!';
    }

    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'Step1Form',
})(Step1);
