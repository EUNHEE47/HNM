import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const loginUser = (event) => {
    event.preventDefault();
    if (event.target[0].value === "" || event.target[1].value === "") {
      setError("로그인 정보를 입력하세요");
      setAuthenticate(false);
      navigate("/login");
    } else {
      setAuthenticate(true);
      navigate("/");
    }
  };

  return (
    <div>
      <Container className="login-wrap">
        <Form onSubmit={(event) => loginUser(event)} className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Text> {error}</Form.Text>

          <Button variant="dark" type="submit">
            LOGIN
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
