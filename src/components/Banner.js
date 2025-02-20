  import { useState, useEffect } from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import headerImg from "../assets/img/header-img.svg";
  import { ArrowRightCircle } from 'react-bootstrap-icons';
  import 'animate.css';
  import TrackVisibility from 'react-on-screen';
  import cv from '../assets/PDF/HV2025Enero.pdf';
  import pdfLogo from '../assets/img/pdfLogo.svg';
  import { HashLink } from 'react-router-hash-link';

  export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 50);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Systems Engineer", "Machine Learning Specialist"];
    const period = 500;

    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);

      return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }

    return (
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Edwin Castro`} <span className="txt-rotate" dataPeriod="500" data-rotate='["Systems Engineer", "Machine Learning Specialist"]'><span className="wrap">{text}</span></span></h1>
                    <p>
                    Passionate about cybersecurity, artificial intelligence, and volleyball.
                     My work focuses on developing computer vision technologies to analyze plays in real-time,
                      combining security, AI, and my love for the sport. Always looking for new ways to innovate
                       and apply cutting-edge technology to solve real-world challenges.
                    </p>
                    <a href={cv} download="Edwin_Castro_CV.pdf">
                      <button className="cv-button">
                        Download My CV <img src={pdfLogo} alt="" />
                      </button>
                    </a>
                    <HashLink to='#connect' className="no-underline">
                      <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                    </HashLink>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
