import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios
        .post(`http://localhost:8080/api/user/login`, { email, password })
        .then((response) => {
          const userid = response.data.map((data) => {
            return data._id;
          });

          alert("success!!");
          toast.success("successful login!!", {
            autoClose: 2000, // Time in milliseconds (3 seconds)
          });
          setTimeout(() => {
            navigate(`/home/${userid}`);
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {}
  };
  return (
    <>
      <div className="register-form">
        <h1>PSov</h1>
        <h4>Login</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Confirmed" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p>
            Dont have a Account click <Link to="/">Here</Link>
          </p>
        </Form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
