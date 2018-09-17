import React from 'react';
import './style.scss';

export default class ThankYouPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="thank-you-page">
        <h1>Thank You</h1>
      </div>
    );
  }
}
