import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


const CustomButton = ({ onClick }) => (
    <Button
        bsSize="small"
        type="submit"
        onClick={onClick}
    >
        Next >
    </Button>
);

CustomButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default CustomButton;
