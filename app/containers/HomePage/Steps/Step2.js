import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';

import { Panel, FormGroup, Form } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

import CustomButton from '../../../components/CustomButton/CustomButton';
import { createPost } from '../actions';
import PanelHeader from '../../../components/PanelHeader/PanelHeader';


class Step2 extends React.PureComponent {

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

    static renderDatePicker({ input, meta: { touched, error } }) {
        return (
            <div className="form-group">
                <label className="control-label">Date of birth</label>
                <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value} />
                <div className="error-text">{touched ? error : ''}</div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values);
        this.props.onChangeActivePanel(3);
        console.log(values);
    }

    render() {
        const { handleSubmit, expanded } = this.props;

        return (
            <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Panel eventKey="2" expanded={expanded} onToggle>
                    <PanelHeader title="Step 2: More comments" />

                    <Panel.Collapse>
                        <Panel.Body>
                            <div className="form-wrapper">
                                <Field
                                    label="Telephone number"
                                    name="telephone"
                                    component={Step2.renderField}
                                    type="tel"
                                />

                                <FormGroup>
                                    <label className="control-label">Gender</label>
                                    <Field name="gender" component="select">
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Field>
                                </FormGroup>

                                <div/>

                                <Field
                                    label="Date of birth"
                                    name="date"
                                    component={Step2.renderDatePicker}
                                />

                                <CustomButton type="submit"/>
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
    if (!values.telephone || values.telephone.length < 10) {
        errors.telephone = 'Invalid telephone number';
    }

    if (!values.gender) {
        errors.gender = 'Select your gender';
    }

    if (!values.date) {
        errors.date = 'Invalid date of birth';
    }

    // If errors is empty, the form is fine to submit
    return errors;
}

Step2.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    expanded: PropTypes.bool.isRequired,
    createPost: PropTypes.func.isRequired,
    onChangeActivePanel: PropTypes.func.isRequired,
};

export default reduxForm({
    validate,
    form: 'Step2Form',
})(
    connect(null, { createPost })(Step2),
);
