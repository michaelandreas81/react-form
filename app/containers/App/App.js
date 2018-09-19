/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import ThankYouPage from '../ThankYouPage/ThankYouPage';

import './style.scss';

const App = () => (
    <div className="app-wrapper">
        <Helmet titleTemplate="React.js Form" defaultTitle="React.js Form" />
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/thank-you" component={ThankYouPage}/>
        </Switch>
    </div>
);

export default App;
