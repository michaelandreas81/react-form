import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Panel } from 'react-bootstrap';
import { Redirect } from 'react-router';
import CustomButton from '../../../components/CustomButton/CustomButton';
import FormInput from '../../../components/FormInput/FormInput';


export default class Step3 extends React.PureComponent {
    constructor() {
        super();
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ redirect: true });
        // get our form data out of state
        const { firstName } = this.props.props;

        axios.post('/', { firstName })
            .then((result) => {
                //access the results here....
            });
    };

    render() {
        const { comments } = this.props.props;
        const { from } = this.props.location || '/';
        return (
            <Panel eventKey="3" expanded={this.props.expanded} onToggle>
                <Panel.Heading>
                    <Panel.Title>Step 3: Final comments</Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                    <Panel.Body>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '2fr 1fr',
                        }} className="comments">

                            <FormInput
                                label="Comments"
                                value={comments}
                                onChange={this.props.props.onChangeComments}
                                componentClass="textarea"
                                controlId="formControlsTextarea"
                            />
                            <CustomButton onClick={() => this.onSubmit} type="submit"/>
                        </div>
                    </Panel.Body>
                </Panel.Collapse>
            </Panel>
        );
    }
}
