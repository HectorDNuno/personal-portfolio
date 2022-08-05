import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reactLogo from "../assests/img/react-brands.svg";
import rubyLogo from "../assests/img/gem-solid.svg";
import laptopLogo from "../assests/img/laptop-code-solid.svg";
import cssLogo from "../assests/img/css3-alt-brands.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>Description</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={laptopLogo} alt="" />
                  <h5>Web Development</h5>
                </div>

                <div className="item">
                  <img src={reactLogo} alt="" />
                  <h5>React</h5>
                </div>

                <div className="item">
                  <img src={rubyLogo} alt="" />
                  <h5>Ruby</h5>
                </div>

                <div className="item">
                  <img src={cssLogo} alt="" />
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
