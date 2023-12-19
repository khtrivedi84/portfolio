import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
    <Header />
    <div className={`container-fluid`}>
      <Hero />
      <AboutMe />
    </div>
    </>
  );
}

export default App;
