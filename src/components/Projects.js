import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Real-Time Volleyball Tracking",
      description: "AI-based system for detecting and tracking volleyball movement using YOLO and OpenCV.",
      imgUrl: projImg1,
    },
    {
      title: "Interactive Volleyball Training",
      description: "Web platform with computer vision tools to assist coaches and players.",
      imgUrl: projImg2,
    },
    {
      title: "Sports Data Visualization",
      description: "Real-time performance analytics for volleyball players, powered by AI.",
      imgUrl: projImg3,
    },
    {
      title: "Smart Volleyball Court",
      description: "IoT-powered system to enhance training efficiency with automated feedback.",
      imgUrl: projImg1,
    },
    {
      title: "AI-powered Refereeing",
      description: "System that assists referees with automatic rule violation detection.",
      imgUrl: projImg2,
    },
    {
      title: "Cloud-based Video Analysis",
      description: "Upload and analyze volleyball games with AI-enhanced insights.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My Projects</h2>
                  <p>
                    As a passionate volleyball player and AI enthusiast, I am developing cutting-edge solutions that merge sports and technology.  
                    My projects focus on real-time tracking, performance analysis, and interactive training tools using computer vision and machine learning.  
                    The goal is to make volleyball training more accessible, data-driven, and engaging for players and coaches worldwide.
                  </p>
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
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          My research focuses on improving computer vision accuracy for real-time volleyball tracking.  
                          I am currently testing deep learning models like YOLO and exploring optimizations for lightweight deployment on mobile and cloud platforms.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          The next phase of this project includes enhanced player movement analysis, jump height tracking, and AI-assisted coaching features.  
                          I aim to integrate augmented reality (AR) for immersive training experiences and expand the platform for broader sports analytics.
                        </p>
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
