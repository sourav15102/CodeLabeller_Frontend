import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Security/AuthContext";
import "./AnnotatorHeader.css";
const AnnotatorHeader = (props) => {
  const authContext = useAuth();
  const changePage = useNavigate();

  const onLogout = () => {
    authContext.setAuthenticated(false);
    window.localStorage.clear();
    changePage(0);
    setTimeout(() => {
      changePage("/");
    }, 1000);
  };

  const onHome = () => {
    const currentPagePath = window.location.pathname;
    const targetPagePath = "/annotator/home/viewSurveys";
    if (currentPagePath === targetPagePath) {
      window.location.reload();
    }
    changePage("/annotator/home/viewSurveys");
  };

  return (
    <Navbar expand="lg" variant="dark" className="custom-navbar">
      <Navbar.Brand>
        <img
          src="https://raw.githubusercontent.com/fabiospampinato/vscode-highlight/master/resources/logo.png"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
        {props.title}
      </Navbar.Brand>

      <Nav className="ml-auto">
        <Nav.Link onClick={onHome}>Home</Nav.Link>
        <Nav.Link onClick={onLogout}>Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default AnnotatorHeader;
