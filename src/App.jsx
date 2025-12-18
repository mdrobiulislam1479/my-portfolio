import AnimatedCursor from "react-animated-cursor";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Navbar />
      <div className="hidden md:flex">
        {/* <AnimatedCursor
          innerSize={8}
          outerSize={28}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          showSystemCursor={true}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
          }}
          outerStyle={{
            border: "2px solid var(--cursor-color)",
          }}
        /> */}
      </div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
