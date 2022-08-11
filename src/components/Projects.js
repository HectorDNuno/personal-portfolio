import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import nozama from "../assests/img/nozama_screenshot.png";
import typeCheckr from "../assests/img/type-checkr-screenshot.png";
import weatherApp from "../assests/img/weather-app-screenshot.png";
import background from "../assests/img/spacex-uj3hvdfQujI-unsplash.jpeg";

export const Projects = () => {
  const projects = [
    {
      title: "Type Checkr",
      description: "A reference for users who play the video game Pokémon",
      imgUrl: typeCheckr,
    },
    {
      title: "Nozama",
      description: "An Amazon clone that lets users create logins, add items to their cart, and process payments",
      imgUrl: nozama,
    },
    {
      title: "Weather App",
      description:
        "A simple weather app where a user can look up a city and see it's detailed weather information and a weekly weather report",
      imgUrl: weatherApp,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>My most recent projects!</p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Deployed Projects</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second">In the Works</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="third">Future Endeavors</Nav.Link>
                </Nav.Item>
              </Nav> */}

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">Lorem</Tab.Pane>
                <Tab.Pane eventKey="third">Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={background} alt="" /> */}
    </section>
  );
};
