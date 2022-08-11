import { Col, Container, Row } from "react-bootstrap";
import gitHubLogo from "../assests/img/github-brands.svg";
import linkedInLogo from "../assests/img/linkedin-brands.svg";
import logo from "../assests/img/user-astronaut-solid.svg";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="" />
            <span>Thank you for stopping by!</span>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/hectornuno/" target="_blank" rel="noopener noreferrer">
                <img src={linkedInLogo} alt="LinkedIn logo" />
              </a>

              <a href="https://github.com/HectorDNuno" target="_blank" rel="noopener noreferrer">
                <img src={gitHubLogo} alt="GitHub logo" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
