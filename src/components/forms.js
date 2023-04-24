import React, { useState } from "react";
import { Col, Row, Form,  } from "react-bootstrap";
import {question} from "../data";
const Forms = ({ onadd }) => {
  const [qu, setqu] = useState("");
  const [an, setau] = useState("");
  const addnewitem = () => {
    question.push({ id :Math.random(), q: qu, a: an });
    setqu('');
    setau('');
    onadd(); 
    console.log(question)
    
  };
  return (
    <Row className="my-3">
      <Col sm="5">
        <Form.Control value={qu} onChange={(e) => setqu(e.target.value)}
          type="text" placeholder="Enter your question"/>
      </Col>

      <Col sm="5">
        <Form.Control
          value={an}
          onChange={(e) => setau(e.target.value)}
          type="password"
          placeholder="your answer"
        />
      </Col>
      <Col sm="2">
        <button onClick={addnewitem} className="btn-color w-100">
          Add
        </button>
      </Col>
    </Row>
  );
};

export default Forms;
