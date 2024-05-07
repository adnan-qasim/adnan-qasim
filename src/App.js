// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Careers from './Components/Careers';
import Footer from './Components/Footer';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="bg-black text-white hide-scroll-bar m-auto">
      <div className="">

        <div className="relative flex flex-col items-center justify-center h-screen bg-cover md:bg-fixed bg-center bg-yellow-700" style={{ backgroundImage: `url('https://www.pascalvangemert.nl/assets/hero.61b2c1e3.png')` }} >
          <div className="mb-2 tracking-wider font-bold font-permanent-marker text-black text-center">
            <h2 className="text-5xl ">Pascal van Gemert</h2>
            <p className="">..my Interactive Resume</p>
          </div>
        </div>
      </div>
      <div className="px-5">
        <About />

        <div className="">
          <Careers />
        </div>
        <div className="">
          <Projects />
        </div>
        <Footer />
      </div>
    </div>

  );
}

export default App;
