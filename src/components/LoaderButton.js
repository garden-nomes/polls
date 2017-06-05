import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import Error from './Error';
import LastUpdated from './LastUpdated';

const LoaderButton = ({ loading, error, lastUpdated, onReload }) => {
  if (loading) {
    return (
      <span className="loader-button">
        <Button outline size="sm" color="info" disabled>
          <FontAwesome name="spinner" spin />
        </Button>
        &nbsp;
        <small class="text-muted">Loading...</small>
      </span>
    );
  } else {
    return (
      <span className="loader-button">
        <Button outline size="sm" color="info" onClick={onReload} >
          <FontAwesome name="refresh" />
        </Button>
        &nbsp;
        {error ?
          <Error message={error.message} />
        :
          <LastUpdated lastUpdated={lastUpdated} />
        }
      </span>
    )
  }
};

export default LoaderButton;
