import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import projImgVolleyballTracker from "../assets/img/img_project_volleyballTracker.svg";
import { useLanguage } from "../context/LanguageContext";


const translations = {
  en: {
    title: "My Projects",
    description: "As a passionate volleyball player and AI enthusiast, I am developing cutting-edge solutions that merge sports and technology. My projects focus on real-time tracking, performance analysis, and interactive training tools using computer vision and machine learning. The goal is to make volleyball training more accessible, data-driven, and engaging for players and coaches worldwide.",
    tabs: ["Main Projects", "Research & Development", "Future Plans"],
    research: "My research focuses on improving computer vision accuracy for real-time volleyball tracking. I am currently testing deep learning models like YOLO and exploring optimizations for lightweight deployment on mobile and cloud platforms.",
    future: "The next phase of this project includes enhanced player movement analysis, jump height tracking, and AI-assisted coaching features. I aim to integrate augmented reality (AR) for immersive training experiences and expand the platform for broader sports analytics.",
    projects:
    [
      {
        title: "Volleyball Tracker",
        description: "A real-time volleyball tracking system that uses computer vision to analyze player movements, ball trajectory, and game statistics. The system provides interactive feedback for players and coaches to enhance training sessions and performance.",
        imgUrl: projImgVolleyballTracker

      }
    ]
  },
  es: {
    title: "Mis Proyectos",
    description: "Como apasionado del voleibol y entusiasta de la IA, estoy desarrollando soluciones innovadoras que combinan el deporte con la tecnología. Mis proyectos se centran en el seguimiento en tiempo real, el análisis del rendimiento y herramientas de entrenamiento interactivas utilizando visión por computadora y aprendizaje automático. El objetivo es hacer que el entrenamiento de voleibol sea más accesible, basado en datos y atractivo para jugadores y entrenadores en todo el mundo.",
    tabs: ["Proyectos Principales", "Investigación y Desarrollo", "Planes Futuros"],
    research: "Mi investigación se centra en mejorar la precisión de la visión por computadora para el seguimiento en tiempo real del voleibol. Actualmente, estoy probando modelos de aprendizaje profundo como YOLO y explorando optimizaciones para un despliegue ligero en plataformas móviles y en la nube.",
    future: "La próxima fase de este proyecto incluye un análisis mejorado del movimiento de los jugadores, seguimiento de la altura del salto y funciones de entrenamiento asistidas por IA. Mi objetivo es integrar la realidad aumentada (AR) para experiencias de entrenamiento inmersivas y expandir la plataforma para un análisis deportivo más amplio.",
    projects: [
      {
        title: "Volleyball Tracker",
        description: "Un sistema de seguimiento de voleibol en tiempo real que utiliza visión por computadora para analizar los movimientos de los jugadores, la trayectoria del balón y las estadísticas del juego. El sistema proporciona retroalimentación interactiva para jugadores y entrenadores, mejorando las sesiones de entrenamiento y el rendimiento.",
        imgUrl: projImgVolleyballTracker
      }
    ]
  }
};

export const Projects = () => {
  const { currentLang } = useLanguage();
  const content = translations[currentLang];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{content.title}</h2>
                  <p>{content.description}</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Main Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Research & Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Future Plans</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                        {content.projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>{content.research}</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>{content.future}</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Design" />
    </section>
  );
};
