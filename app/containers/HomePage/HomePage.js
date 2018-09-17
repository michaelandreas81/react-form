import React from 'react';
import PropTypes from 'prop-types';
import { PanelGroup, Form } from 'react-bootstrap';

import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';

import './style.scss';


export default class HomePage extends React.PureComponent {
    render() {
        const { active, onChangeActivePanel } = this.props;

        return (
            <div className="home-page">
                <section className="centered">
                    <Form onSubmit={this.props.onSubmitForm}>
                        <PanelGroup id="panel-group">
                            <Step1 expanded={active === 1} onChangeActivePanel={onChangeActivePanel}
                                   props={this.props}/>
                            <Step2 expanded={active === 2} onChangeActivePanel={onChangeActivePanel}
                                   props={this.props}/>
                            <Step3 expanded={active === 3} props={this.props}/>
                        </PanelGroup>
                    </Form>
                </section>
            </div>
        );
    }
}

HomePage.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
    onSubmitForm: PropTypes.func,
};
