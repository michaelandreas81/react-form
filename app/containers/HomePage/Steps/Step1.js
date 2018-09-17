import React from 'react';
import PropTypes from 'prop-types';
import * as EmailValidator from 'email-validator';
import { Panel, FormGroup, ControlLabel } from 'react-bootstrap';

import CustomButton from '../../../components/CustomButton/CustomButton';
import AddressSearch from '../../../components/AddressSearch/AddressSearch';
import FormInput from '../../../components/FormInput/FormInput';


export default class Step1 extends React.PureComponent {
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


    render() {
        const { firstName, surname, emailAddress } = this.props.props;
console.log(this.props.props.home, 'home');
        return (
            <Panel eventKey="1" expanded={this.props.expanded} onToggle>
                <Panel.Heading>
                    <Panel.Title>Step 1: Your details</Panel.Title>
                </Panel.Heading>

                <Panel.Collapse>
                    <Panel.Body collapsible>
                        <div className="form-wrapper">

                            <FormInput
                                label="First Name"
                                value={firstName}
                                onChange={this.props.props.onChangeFirstName}
                                validationState={Step1.getValidationText(firstName)}
                            />

                            <FormInput
                                label="Surname"
                                value={surname}
                                onChange={this.props.props.onChangeSurname}
                                validationState={Step1.getValidationText(surname)}
                            />

                            <FormInput
                                label="Email Address:"
                                value={emailAddress}
                                onChange={this.props.props.onChangeEmailAddress}
                                validationState={Step1.getValidationEmail(emailAddress)}
                                style={{ gridColumnStart: 1 }}
                            />

                            <CustomButton onClick={this.validate} type="button"/>

                            <FormGroup>
                                <ControlLabel>Home Address:</ControlLabel>
                                <AddressSearch/>
                            </FormGroup>
                        </div>
                    </Panel.Body>
                </Panel.Collapse>
            </Panel>
        );
    }
}
