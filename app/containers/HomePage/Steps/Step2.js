import React from 'react';
import PropTypes from 'prop-types';
import { Panel, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

import CustomButton from '../../../components/CustomButton/CustomButton';
import FormInput from '../../../components/FormInput/FormInput';


export default class Step2 extends React.PureComponent {
    constructor(props) {
        super(props);

        this.validate = this.validate.bind(this);
    }

    validate() {
        const complete = this.props.props.telephoneNumber.length && this.props.props.gender.length && this.props.props.dateOfBirth.length >= 1;

        if (complete) {
            this.props.onChangeActivePanel(3);
        }
    }

    static getValidationText(value) {
        const length = value.length;
        if (length > 10) {
            return 'success';
        } else if (length > 0) return 'error';
        return null;
    }

    render() {
        const { telephoneNumber, dateOfBirth } = this.props.props;

        return (
            <Panel eventKey="2" expanded={this.props.expanded} onToggle>
                <Panel.Heading>
                    <Panel.Title>Step 2: More comments</Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                    <Panel.Body>
                        <div className="form-wrapper">
                            <FormInput
                                label="Telephone number"
                                value={telephoneNumber}
                                onChange={this.props.props.onChangeTelephoneNumber}
                                validationState={Step2.getValidationText(telephoneNumber)}
                            />

                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Gender</ControlLabel>
                                <FormControl
                                    componentClass="select"
                                    placeholder="Select Gender"
                                    style={{ boxShadow: 'inset 0 -5px 20px 2px #888' }}
                                    onChange={this.props.props.onChangeGender}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </FormControl>
                            </FormGroup>

                            <FormGroup className="dob">
                                <ControlLabel>Date of birth</ControlLabel>
                                <DatePicker value={dateOfBirth}
                                            onChange={date => this.props.props.onChangeDateOfBirth(date)}/>
                            </FormGroup>

                            <CustomButton onClick={this.validate} type="button"/>
                        </div>
                    </Panel.Body>
                </Panel.Collapse>
            </Panel>
        );
    }
}
