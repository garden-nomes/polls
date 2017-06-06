import React from 'react';
import {
  Row,
  Col,
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

const CreatePollForm = ({ hideCreate }) => (
  <Card className="mb-4">
    <CardBlock>
      <Form>
        <div className="d-flex justify-content-between mb-2">
          <CardTitle>Create poll</CardTitle>

          <div className="text-right">
            <Button size="sm" className="mr-2" color="secondary" onClick={hideCreate}>
              <FontAwesome name="chevron-up" /> Close
            </Button>

            <Button size="sm" color="primary">
              Create <FontAwesome name="arrow-right" />
            </Button>
          </div>
        </div>

        <FormGroup>
          <Label for="question" hidden>Question</Label>

          <Input
            type="text"
            name="question"
            id="question"
            placeholder="What would you like to know?"
          />
        </FormGroup>
        <Row>
          <Col sm="6">
            <FormGroup>
              <Label for="addOption" hidden>Add response</Label>

              <InputGroup size="sm" style={{ width: '300px' }}>
                <Input
                  type="text"
                  name="addOption"
                  id="addOption"
                  placeholder="Add response"
                />

                <InputGroupButton>
                  <Button color="primary"><FontAwesome name="plus" /></Button>
                </InputGroupButton>
              </InputGroup>
            </FormGroup>
          </Col>

          <Col sm="6">
          </Col>
        </Row>
      </Form>
    </CardBlock>
  </Card>
);

export default CreatePollForm;
