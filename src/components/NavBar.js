import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import langIconES from '../assets/img/lang-icon-es.svg';
import langIconEN from '../assets/img/lang-icon-en.svg';
import { HashLink } from 'react-router-hash-link';

const translations = {
  en: {
    home: "Home",
    skills: "Skills",
    projects: "Projects",
    connect: "Let’s Connect",
    language: "Language",
  },
  es: {
    home: "Inicio",
    skills: "Habilidades",
    projects: "Proyectos",
    connect: "Conectemos",
    language: "Idioma",
  }
};

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState('en'); 

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    if (activeLink !== value) setActiveLink(value);
  };

  const toggleLanguage = () => {
    setCurrentLang((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container className="nav-container">
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <div className="Language-icon"> 
          <a onClick={toggleLanguage} style={{ cursor: "pointer" }}>
            {translations[currentLang].language} 
            <img src={currentLang === 'es' ? langIconES : langIconEN} alt="Language" />
          </a>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="#home" 
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('home')}
            >
              {translations[currentLang].home}
            </Nav.Link>
            <Nav.Link 
              href="#skills" 
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('skills')}
            >
              {translations[currentLang].skills}
            </Nav.Link>
            <Nav.Link 
              href="#projects" 
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('projects')}
            >
              {translations[currentLang].projects}
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/edwin-castro-584b78190/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/edwinscb" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="GitHub" />
              </a>
            </div>

            <div className="Connect-icon">
              <HashLink to='#connect'>
                <button className="vvd"><span>{translations[currentLang].connect}</span></button>
              </HashLink>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
