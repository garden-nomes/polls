import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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

class CreatePollForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      addOption: '',
      options: [],
      isOpen: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.onAddOption = this.onAddOption.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
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
    if (event.which === 13) {
      if (document.activeElement === this.addOptionInput) {
        this.onAddOption(event);
      }
    }
  }

  render() {
    const { isOpen, question, addOption, options } = this.state;

    return (
      <Form onKeyPress={this.onKeyPress} className="mb-2">
        <FormGroup>
          <Label for="question" hidden>Question</Label>

          <Input
            autofocus
            value={question}
            onChange={this.handleChange}
            type="text"
            name="question"
            id="question"
            placeholder="What would you like to know?"
          />
        </FormGroup>

        <Collapse isOpen={isOpen}>
          {options.map((option, index) => (
            <Input size="sm" className="d-inline-block mr-2" key={index} static>{option}</Input>
          ))}

          <FormGroup className="d-inline-block">
            <Label for="addOption" hidden>Add option</Label>

            <InputGroup className="d-inline-flex" size="sm" style={{ width: '20rem' }}>
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
                <Button
                  onClick={this.onAddOption}
                  color="secondary"
                >
                  <FontAwesome name="plus" />
                </Button>
              </InputGroupButton>
            </InputGroup>
          </FormGroup>

          <Button className="ml-2" size="sm" color="primary">
            Create Poll <FontAwesome name="arrow-right" />
          </Button>
        </Collapse>
      </Form>
    );
  }
}

export default CreatePollForm;
