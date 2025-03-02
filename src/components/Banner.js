import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import cv from "../assets/PDF/HV2025Enero.pdf";
import pdfLogo from "../assets/img/pdfLogo.svg";
import { HashLink } from "react-router-hash-link";
import { useLanguage } from "../context/LanguageContext"; // Importamos el contexto

export const Banner = () => {
  const { currentLang, toggleLanguage } = useLanguage(); // Obtenemos el idioma actual
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = currentLang === "es"
    ? ["Ingeniero de Sistemas", "Especialista en Machine Learning"]
    : ["Systems Engineer", "Machine Learning Specialist"];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Textos en español e inglés
  const translations = {
    en: {
      tagline: "Welcome to my Portfolio",
      greeting: "Hi! I'm Edwin Castro",
      description:
        "Passionate about cybersecurity, artificial intelligence, and volleyball. My work focuses on developing computer vision technologies to analyze plays in real-time, combining security, AI, and my love for the sport. Always looking for new ways to innovate and apply cutting-edge technology to solve real-world challenges.",
      download: "Download My CV",
      connect: "Let’s Connect",
    },
    es: {
      tagline: "Bienvenido a mi Portafolio",
      greeting: "¡Hola! Soy Edwin Castro",
      description:
        "Apasionado por la ciberseguridad, la inteligencia artificial y el voleibol. Mi trabajo se centra en desarrollar tecnologías de visión por computadora para analizar jugadas en tiempo real, combinando seguridad, IA y mi amor por el deporte. Siempre en busca de nuevas formas de innovar y aplicar tecnología de vanguardia para resolver desafíos del mundo real.",
      download: "Descargar Mi CV",
      connect: "Conectemos",
    },
  };

  const { tagline, greeting, description, download, connect } =
    translations[currentLang];

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">{tagline}</span>
                  <h1>
                    {`${greeting} `}
                    <span
                      className="txt-rotate"
                      dataPeriod="500"
                      data-rotate={JSON.stringify(toRotate)}
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>{description}</p>
                  <a href={cv} download="Edwin_Castro_CV.pdf">
                    <button className="cv-button">
                      {download} <img src={pdfLogo} alt="" />
                    </button>
                  </a>
                  <HashLink to="#connect" className="no-underline">
                    <button onClick={() => console.log("connect")}>
                      {connect} <ArrowRightCircle size={25} />
                    </button>
                  </HashLink>
                  <button onClick={toggleLanguage} className="language-button">
                    {currentLang === "es" ? "Switch to English" : "Cambiar a Español"}
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
