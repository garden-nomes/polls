import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import Error from './Error';

const LoaderButton = ({ loading, error, onReload }) => {
  if (loading) {
    return (
      <span className="loader-button">
        <Button outline size="sm" color="secondary" disabled>
          <FontAwesome name="spinner" spin />
        </Button>
      </span>
    );
  } else {
    return (
      <span className="loader-button">
        <Button outline size="sm" color="secondary" onClick={onReload} >
          <FontAwesome name="refresh" />
        </Button>
        &nbsp;
        {!!error && <Error message={error.message} />}
      </span>
    )
  }
};

export default LoaderButton;
