import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

let currentId = 0;

class Error extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { tooltipOpen: false };
  }

  componentWillMount() {
    this.id = `error-${currentId++}`;
  }

  toggle() {
    const { tooltipOpen } = this.state;
    this.setState({ tooltipOpen: !tooltipOpen });
  }

  render() {
    const { tooltipOpen } = this.state;
    const { message } = this.props;

    return (
      <span className="error">
        <FontAwesome
          id={this.id}
          name="exclamation-circle"
          className="text-danger"
        />

        <Tooltip
          placement="top"
          isOpen={tooltipOpen}
          target={this.id}
          toggle={this.toggle}
        >
          {message}
        </Tooltip>
      </span>
    )
  }
}

export default Error;
