import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import CanvasBackground from './components/CanvasAnimation';
import Projects from './components/Projects';

function App() {
  return (
    <>
    <Header />
    <div className={`container-fluid`}>
      <CanvasBackground />
      <Hero />
      <AboutMe />
      <Projects />
    </div>
    </>
  );
}

export default App;
