import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
function Contact() {
  return (
    <div>
      <Card>
      <Card.Body>
      <label htmlFor="">ID</label>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter ID"
          aria-label="Id"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <label htmlFor="">Name</label>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Name"
          aria-label="Enter Your Name"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      <label htmlFor="">Email</label>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Email"
          aria-label="Enter Your Email"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      <label htmlFor="">Mobile No</label>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Mobile No"
          aria-label="Mobile No"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      </Card.Body>
      </Card>
    </div>
  )
}
export default Contact
