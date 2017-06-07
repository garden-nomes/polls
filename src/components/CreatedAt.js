import React, { Component } from 'react';
import moment from 'moment';

class CreatedAt extends Component {
  componentWillMount() {
    this.interval = setInterval(this.forceUpdate.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { createdAt, className } = this.props;

    return (
      <small className={className}>
        Created {moment(createdAt).fromNow()}
      </small>
    );
  }
}

export default CreatedAt;
