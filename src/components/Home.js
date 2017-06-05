import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PollsList from './PollsList';
import PollsLoader from './PollsLoader';
import NavButtons from './NavButtons';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <Row>
          <Col sm="6">
            <PollsLoader className="mb-2" />
          </Col>
          <Col sm="6" className="text-right">
            <NavButtons />
          </Col>
        </Row>
        <PollsList />
      </div>
    );
  }
}

export default Home;
