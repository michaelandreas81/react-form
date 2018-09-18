import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Panel } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form/lib/immutable';
import connect from 'react-redux/es/connect/connect';

import { createPost } from '../actions';

import CustomButton from '../../../components/CustomButton/CustomButton';
import PanelHeader from '../../../components/PanelHeader/PanelHeader';


class Step3 extends React.PureComponent {

    onSubmit(values) {
        this.props.createPost(values);
        console.log(values);
    }

    render() {
        const { handleSubmit, expanded } = this.props;

        return (
            <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Panel eventKey="3" expanded={expanded} onToggle>
                    <PanelHeader title="Step 3: Final comments" />
                    <Panel.Collapse>
                        <Panel.Body>
                            <div className="comments">

                                <FormGroup>
                                    <label className="control-label">Comments</label>
                                    <Field
                                        label="Comments"
                                        name="comments"
                                        component="textarea"
                                    />
                                </FormGroup>

                                <CustomButton type="submit"/>
                            </div>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
            </Form>
        );
    }
}

Step3.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    expanded: PropTypes.bool.isRequired,
    createPost: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'Step3Form',
})(
    connect(null, { createPost })(Step3),
);
