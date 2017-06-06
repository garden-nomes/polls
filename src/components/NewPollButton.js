import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const NewPollButton = (props) => (
  <Button color="info" size="sm" {...props}>
    <FontAwesome name="plus" /> Create poll
  </Button>
);

export default NewPollButton;
