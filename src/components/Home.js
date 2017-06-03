import React, { Component } from 'react';
import PollsList from './PollsList';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <PollsList />
      </div>
    );
  }
}

export default Home;
