import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Infinite from './components/Infinite';
import Footer from './components/Footer';
import Poster from './components/Poster';

function App() {
  return (
    <div className="App  bg-[#FAF9F8]">
      <Header />
      <Hero />
      <Infinite />
      <About />
      <Projects />
      <Poster />
      <Footer />
    </div>
  );
}

export default App;
