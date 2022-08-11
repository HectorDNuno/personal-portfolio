import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import bannerImg from "../assests/img/satellite-solid.svg";

export const Banner = () => {
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 10);
  const toRotate = ["Software Engineer", "Sci-Fi Enthusiast", "Gamer"];
  const period = 2000;
  const aboutMe =
    "I am a Software Engineer with expereince in Ruby and JavaScript frameworks. I consider myself a 'forver-student', and I'm eager to build on my coding foundations and stay in tune with the latest engineering practices and strategies. I'll also play some video games along the way!";

  const tick = () => {
    let i = loopNumber % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Hector Nuno, `}
              <div className="txt-rotate">
                <span className="wrap">{text}</span>
              </div>
            </h1>
            <p> {aboutMe} </p>
            {/* <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button> */}
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img className="bannerImg" src={bannerImg} alt="banner img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
