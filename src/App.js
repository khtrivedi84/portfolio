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
      <Projects />
    </div>
    </>
  );
}

export default App;
