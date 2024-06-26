import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import CanvasBackground from './components/CanvasAnimation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
    <div className={`container-fluid`}>
      <CanvasBackground />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
    </>
  );
}

export default App;
