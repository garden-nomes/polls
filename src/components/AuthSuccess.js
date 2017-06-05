import React, { Component } from 'react';
import queryString from 'query-string';

class AuthSuccess extends Component {
  componentDidMount() {
    const { location } = this.props;
    const { token } = queryString.parse(location.search)

    localStorage.setItem("authToken", token);
    window.opener.postMessage(token, "*");
    window.opener.focus();
    window.close();
  }

  render() {
    return <h1>Success!</h1>;
  }
}

export default AuthSuccess;
