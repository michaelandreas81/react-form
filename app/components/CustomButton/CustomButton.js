import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


const CustomButton = ({ onClick, disabled, type }) => (
    <Button
        bsSize="small"
        type={type}
        onClick={onClick}
        disabled={disabled}
    >
        Next >
    </Button>
);

CustomButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default CustomButton;
