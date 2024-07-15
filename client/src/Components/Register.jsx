import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAction } from "../redux/Action/Useraction";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state);
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios
        .post("http://localhost:8080/api/user/register", {
          name,
          email,
          password,
        })
        .then((res) => {
          console.log(res.data._id);
          toast.success("Successful Forwarding to Home page", {
            autoClose: 2000, // Time in milliseconds (3 seconds)
          });
          dispatch(userRegisterAction({ name, email, password }));
          alert("success!!")
          setTimeout(() => {
            navigate(`/home/${res.data._id}`);
          }, 3000);
        })
        .catch(() => {
          toast.error("user Already exists please Login", {
            autoClose: 2000, // Time in milliseconds (3 seconds)
          });
        });
      // axios
      //   .get("http://localhost:8080/api/user/getuserid")
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    } catch (error) {
      console.log(error);
    }

    console.log(userData);
  };
  return (
    <>
      <div className="register-form">
        <h1>PSov</h1>
        <h4>Registration</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              type="text"
              placeholder="Enter Name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              type="email"
              placeholder="Enter email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Confirmed" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p>
            Already have a Account click <Link to="/login">Here</Link>
          </p>
        </Form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
