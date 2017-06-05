import React, { Component } from 'react';
import queryString from 'query-string';

class AuthSuccess extends Component {
  componentDidMount() {
    const { location } = this.props;
    const { token } = queryString.parse(location.search)

    window.opener.postMessage(token, '*');
    window.opener.focus();
    window.close();
  }

  render() {
    return <div></div>;
  }
}

export default AuthSuccess;
