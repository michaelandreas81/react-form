import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';


const FormInput = ({ label, value, onChange, validationState, style, componentClass, controlId }) => (
    <FormGroup
        bsSize="large"
        controlId={controlId}
        validationState={validationState}
        style={style}
    >
        <ControlLabel>{label}</ControlLabel>
        <FormControl
            type="text"
            value={value}
            onChange={onChange}
            componentClass={componentClass}
        />
        <FormControl.Feedback/>
    </FormGroup>
);

FormInput.defaultProps = {
    type: "text",
};

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    validationState: PropTypes.string,
    componentClass: PropTypes.string,
    controlId: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.object,
};

export default FormInput;
