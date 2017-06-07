import React, { Component } from 'react';
import { Collapse, Row, Col } from 'reactstrap';
import PollsList from './PollsList';
import PollsLoader from './PollsLoader';
import NavButtons from './NavButtons';
import CreatePollForm from './CreatePollForm';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isCreateFormOpen: true };
    this.showCreate = this.showCreate.bind(this);
    this.hideCreate = this.hideCreate.bind(this);
  }

  showCreate() {
    this.setState({ isCreateFormOpen: true });
  }

  hideCreate() {
    this.setState({ isCreateFormOpen: false });
  }

  render() {
    const { isCreateFormOpen } = this.state;

    return (
      <div className='Home'>
        <Row>
          <Col sm="6">
            <PollsLoader className="mb-4" />
          </Col>
          <Col sm="6" className="text-right">
            <NavButtons showCreate={this.showCreate} />
          </Col>
        </Row>

        <Collapse isOpen={isCreateFormOpen}>
          <CreatePollForm hideCreate={this.hideCreate} />
        </Collapse>

        <PollsList />
      </div>
    );
  }
}

export default Home;
