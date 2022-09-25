import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import gitHubLogo from "../assests/img/github-brands.svg";
import linkedInLogo from "../assests/img/linkedin-brands.svg";
import logo from "../assests/img/user-astronaut-solid.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#skills"
              className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              href="#project"
              className={activeLink === "project" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("project")}
            >
              Projects
            </Nav.Link>

            <Nav.Link
              href="#contact"
              className={activeLink === "contact" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/hectornuno/" target="_blank" rel="noopener noreferrer">
                <img src={linkedInLogo} alt="LinkedIn logo" />
              </a>
              <a href="https://github.com/HectorDNuno" target="_blank" rel="noopener noreferrer">
                <img src={gitHubLogo} alt="GitHub logo" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
