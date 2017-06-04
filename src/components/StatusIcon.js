import React from 'react';
import FontAwesome from 'react-fontawesome';
import { UncontrolledTooltip } from 'reactstrap';
import classNames from 'classnames';
import Error from './Error';

const StatusIcon = ({ loading, error, lastUpdated, className }) => {
  if (loading) {
    return <FontAwesome className={className} name="spinner" spin />;
  } else if (error) {
    return <Error className={className} message={error.message} />;
  } else if (lastUpdated) {
    return (
      <FontAwesome
        name="check"
        className={classNames('text-success', className)}
      />
    );
  } else {
    return null;
  }
}

export default StatusIcon;
