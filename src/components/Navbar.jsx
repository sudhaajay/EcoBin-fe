// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const AppNavbar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (token && userData) {
      setLoggedIn(true);
      setRole(userData.role);
      navigate(`/${userData.role}/dashboard`);
    }
  }, [loggedIn, navigate]);

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    setRole(null);
    navigate('/');
  };

  return (
    <Navbar expand="lg" sticky="top" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="Eco Track Logo" className="navbar-logo" />
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link className="nav-link">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="nav-link">About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link className="nav-link">Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="nav-link">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            {!loggedIn ? (
              <LinkContainer to="/auth/user/login">
                <Nav.Link className="nav-link">Login</Nav.Link>
              </LinkContainer>
            ) : (
              <Nav.Link className="nav-link" onClick={handleLogout}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
