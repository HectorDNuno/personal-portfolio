import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import robot from "../assests/img/robot-solid.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const description = "Here you'll find a few of the engineering skills I've learned";

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>
                Skills{" "}
                <span>
                  <img className="skills-image" src={robot} alt="rocket" />
                </span>
              </h2>
              <p> {description} </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <h5>Web Development</h5>
                </div>

                <div className="item">
                  <h5>HTML</h5>
                </div>

                <div className="item">
                  <h5>JavaScript</h5>
                </div>

                <div className="item">
                  <h5>React.js</h5>
                </div>

                <div className="item">
                  <h5>Vue.js</h5>
                </div>

                <div className="item">
                  <h5>Ruby</h5>
                </div>

                <div className="item">
                  <h5>Ruby on Rails</h5>
                </div>

                <div className="item">
                  <h5>CSS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
