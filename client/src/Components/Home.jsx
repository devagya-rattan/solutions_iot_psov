import React from "react";
import UserDetails from "./UserDetails";
import Intro from "./Intro";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Home = () => {
  const { id } = useParams();
  return (
    <>
      <div>
        <Navbar collapseOnSelect expand="lg" className=" navbar">
          <Container>
            <Link className="logo">
              <Navbar.Brand to={`/home/${id}`} className="logo">
                IOT-Solutions
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="links"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Link className="links mx-2" to="/about">
                  Globe
                </Link>
                <Link className="links mx-2" to={`/services/${id}`}>
                  Share your problem
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <UserDetails />
      <Intro />
    </>
  );
};

export default Home;
