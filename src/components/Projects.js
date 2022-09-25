import { Col, Container, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import nozama from "../assests/img/nozama_screenshot.png";
import typeCheckr from "../assests/img/type-checkr-screenshot.png";
import weatherApp from "../assests/img/weather-app-screenshot.png";
import rocket from "../assests/img/rocket-solid.svg";

export const Projects = () => {
  const projects = [
    {
      title: "Type Checkr",
      description:
        "A reference for users who play the video game Pokémon. Built using Ruby on Rails, Vue.js, and the PokéAPI.",
      imgUrl: typeCheckr,
      siteUrl: "https://type-checkr.netlify.app/",
    },
    {
      title: "Nozama",
      description:
        "An Amazon clone that lets users create logins, add items to their cart, and process payments. Created using React.js, Firebase, and Stripe.",
      imgUrl: nozama,
      siteUrl: "https://clone-a8546.web.app/",
    },
    {
      title: "What Weather",
      description:
        "A simple weather app where a user can look up a city and see it's detailed weather information and a weekly weather report. Utilizes GeoDB Cities API, OpenWeather API, and React.js.",
      imgUrl: weatherApp,
      siteUrl: "https://www.youtube.com/watch?v=bLO1_F6Rggg&ab_channel=HectorNuno",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>
              Projects{" "}
              <span>
                <img className="project-image" src={rocket} alt="rocket" />
              </span>
            </h2>

            <p>My most recent projects!</p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
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
    </section>
  );
};
