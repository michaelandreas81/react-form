import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';


const PanelHeader = ({ title }) => (
    <Panel.Heading>
        <Panel.Title>{title}</Panel.Title>
    </Panel.Heading>
);

PanelHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

export default PanelHeader;
