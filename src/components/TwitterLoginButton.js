import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { getUser } from '../actions';

class TwitterLoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticating: false };
    this.popup = this.popup.bind(this);
    this.receiveMessage = this.receiveMessage.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const token = localStorage.getItem('token');

    if (token) {
      dispatch(getUser());
    }
  }

  popup() {
    window.open(
      'http://127.0.0.1:8000/auth/twitter', // url
      'twitter_login', // name
      'width=500,height=500' // specs
    );

    this.listener = window.addEventListener('message', this.receiveMessage);
    this.setState({ authenticating: true })
  }

  receiveMessage(event) {
    const { dispatch } = this.props;
    const token = event.data;

    localStorage.setItem('token', token);
    dispatch(getUser());

    window.removeEventListener('message', this.listener);
    this.setState({ authenticating: false });
  }

  render() {
    const { authenticating } = this.state;

    return (
      <Button
        disabled={authenticating}
        onClick={this.popup}
        color="info"
        size="sm"
      >
        <FontAwesome name="twitter" />&nbsp;
        {authenticating ? "Authticating..." : "Login with Twitter"}
      </Button>
    )
  }
}

export default connect()(TwitterLoginButton);
