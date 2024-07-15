import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { icons } from "./Sectors";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Services = () => {
  const [name, setname] = useState("");
  const [sector, setSector] = useState("");
  const [problems, setProblems] = useState("");
  const [idea, setIdeas] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios
        .post(`http://localhost:8080/api/user/details/${id}`, {
          name,
          details: [
            {
              sector: sector,
              problems: problems,
              ideas: idea,
            },
          ],
        })
        .then((res) => {
          alert("success")
          toast.success("Your response has been recorded Thanks!!", {
            autoClose: 2000, // Time in milliseconds (3 seconds)
          });
          setTimeout(() => {
            navigate(`/home/${id}`);
          }, 3000);
        });
    } catch (error) {}
  };
  return (
    <>
      <div className="register-form">
        <h3>Survey form</h3>
        <h4>We provide best solution to our coustomers.</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              Please select the sector you work or blong to,
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
            >
              <option>Select sector</option>
              {icons.map((sector, key) => {
                return <option key={key}>{sector.sector}</option>;
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              What problems are you facing in you day to day routine? Elaborate
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              value={problems}
              onChange={(e) => {
                setProblems(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Share your ideas what can be improved?</Form.Label>

            <Form.Control
              as="textarea"
              rows={3}
              value={idea}
              onChange={(e) => {
                setIdeas(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Services;
