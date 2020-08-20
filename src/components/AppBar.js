import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const AppBar = () => {
  const appBarLinks = [
    {
      title: "Home",
      url: "/",
      class: "home",
    },
    {
      title: "About Us",
      url: "#about",
      class: "about",
    },
    {
      title: "Our Team",
      url: "#team",
      class: "join",
    },
  ];
  return (
    <Navbar collapseOnSelect expand="lg" className="appbar">
      <Navbar.Brand href="#home">
        <img src="logo.png" alt="logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          {appBarLinks.map((link, i) => (
            <Nav.Link key={i} href={link.url}>
              <Button className={`nav-button ${link.class}`}>
                {link.title}
              </Button>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppBar;
