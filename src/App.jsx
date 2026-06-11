import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          {/* <Projects /> */}
          <Contact />
        </main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
