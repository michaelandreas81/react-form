import React from 'react';
import PropTypes from 'prop-types';
import { PanelGroup } from 'react-bootstrap';

import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';

import './style.scss';
import ThankYouPage from '../ThankYouPage/ThankYouPage';


export default class HomePage extends React.PureComponent {
    render() {
        const { active, onChangeActivePanel } = this.props;

        return (
            <div className="home-page">
                <section className="centered">
                    <PanelGroup id="panel-group">
                        <Step1 expanded={active === 1} onChangeActivePanel={onChangeActivePanel}/>
                        <Step2 expanded={active === 2} onChangeActivePanel={onChangeActivePanel}/>
                        <Step3 expanded={active === 3}/>
                    </PanelGroup>
                </section>
                <ThankYouPage/>
            </div>
        );
    }
}

HomePage.propTypes = {
    loading: PropTypes.bool,
};
