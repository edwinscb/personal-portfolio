import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    title: "Skills",
    description: "I specialize in AI and monitoring, with experience in Python, Computer Vision, and cloud deployment.",
    skills: [
      { title: "Python", percentage: 70 },
      { title: "Computer Vision", percentage: 70 },
      { title: "Machine Learning", percentage: 60 },
      { title: "System Monitoring", percentage: 65 },
      { title: "Automation with Python", percentage: 60 },
      { title: "Google Cloud Platform", percentage: 30 },
      { title: "LLM with RAG", percentage: 50 },
      { title: "Flask/FastAPI", percentage: 40 },
      { title: "Numpy", percentage: 50 },
      { title: "Unity", percentage: 30 },
    ],
  },
  es: {
    title: "Habilidades",
    description: "Me especializo en IA y monitoreo, con experiencia en Python, Visión por Computadora y despliegue en la nube.",
    skills: [
      { title: "Python", percentage: 70 },
      { title: "Visión por Computadora", percentage: 70 },
      { title: "Aprendizaje Automático", percentage: 60 },
      { title: "Monitoreo de Sistemas", percentage: 65 },
      { title: "Automatización con Python", percentage: 60 },
      { title: "Google Cloud Platform", percentage: 30 },
      { title: "LLM con RAG", percentage: 50 },
      { title: "Flask/FastAPI", percentage: 40 },
      { title: "Numpy", percentage: 50 },
      { title: "Unity", percentage: 30 },
    ],
  },
};

export const Skills = () => {
  const { currentLang } = useLanguage();
  const { title, description, skills } = translations[currentLang];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>{title}</h2>
              <p>{description}</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                {skills.map((skill, index) => (
                  <div className="item" key={index} style={{ width: "120px" }}>
                    <CircularProgressbar
                      value={skill.percentage}
                      text={`${skill.percentage}%`}
                      background
                      backgroundPadding={6}
                      styles={buildStyles({
                        backgroundColor: "#5930B2",
                        pathColor: "#FFFFFF",
                        textColor: "#fff",
                        trailColor: "transparent",
                        pathWidth: 15,
                        textSize: "20px",
                      })}
                    />
                    <h5 style={{ marginTop: "10px", color: "white" }}>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Decorative Background" />
    </section>
  );
};
