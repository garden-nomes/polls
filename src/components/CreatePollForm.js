import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Collapse,
  Button,
  Card,
  CardTitle,
  CardBlock,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupButton
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import StatusIcon from './StatusIcon';
import { createPoll } from '../actions';

class CreatePollForm extends Component {
  static initialState = {
    question: '',
    addOption: '',
    options: [],
    isOpen: false,
    isPosting: false
  };

  constructor(props) {
    super(props);
    this.state = this.constructor.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.onAddOption = this.onAddOption.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { posting } = this.state;

    if (posting && nextProps.lastUpdated) {
      this.setState(this.constructor.initialState);
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value, isOpen: true });
  }

  onAddOption(event) {
    const { options, addOption } = this.state;

    this.setState({
      options: [...options, addOption],
      addOption: ''
    });

    event.preventDefault();
    this.addOptionInput.focus();
  }

  onKeyPress(event) {
    if (event.which === 13 && !event.shiftKey) {
      if (document.activeElement === this.addOptionInput) {
        this.onAddOption(event);
      }
    }
  }

  onSubmit(event) {
    const { dispatch } = this.props;
    const { question, options } = this.state;

    event.preventDefault();
    dispatch(createPoll({ question, options }));
    this.setState({ posting: true });
  }

  render() {
    const { loading, error, lastUpdated } = this.props;
    const { isOpen, question, addOption, options, posting } = this.state;

    return (
      <Form onSubmit={this.onSubmit} onKeyPress={this.onKeyPress} className="mb-2">
        <FormGroup>
          <Label for="question" hidden>Question</Label>

          <Input
            autofocus
            size="lg"
            autoComplete="off"
            value={question}
            onChange={this.handleChange}
            type="text"
            name="question"
            id="question"
            placeholder="Ask a question!"
          />
        </FormGroup>

        <Collapse isOpen={isOpen}>
          {options.map((option, index) => (
            <div className="d-inline-block mr-3" key={index}>
              <u>{option}</u>
            </div>
          ))}

          <FormGroup className="d-inline-block">
            <Label for="addOption" hidden>Add option</Label>

            <InputGroup className="d-inline-flex" style={{ width: '20rem' }}>
              <Input
                value={addOption}
                onChange={this.handleChange}
                type="text"
                getRef={input => this.addOptionInput = input}
                name="addOption"
                id="addOption"
                placeholder="Add response"
              />

              <InputGroupButton>
                <Button onClick={this.onAddOption} color="secondary">
                  <FontAwesome name="plus" />
                </Button>
              </InputGroupButton>
            </InputGroup>
          </FormGroup>

          {loading ?
            <Button className="ml-2" color="primary" disabled>
              Creating...
            </Button>
          :
            <Button className="ml-2" color="primary">
              Create Poll <FontAwesome name="arrow-right" />
            </Button>
          }

          <StatusIcon
            className="ml-2"
            loading={loading}
            error={error}
            lastUpdated={lastUpdated}
          />
        </Collapse>
      </Form>
    );
  }
}

const mapStateToProps = ({ polls }) => {
  const { loading, error, lastUpdated } = polls.newItem;
  return { loading, error, lastUpdated };
};

export default connect(mapStateToProps)(CreatePollForm);
