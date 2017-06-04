import React, { Component } from 'react';
import moment from 'moment';

class LastUpdated extends Component {
  componentWillMount() {
    this.interval = setInterval(this.forceUpdate.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { lastUpdated } = this.props;

    return (
      <small className="text-muted">
        Last updated {moment.unix(lastUpdated).fromNow()}
      </small>
    );
  }
}

export default LastUpdated;
