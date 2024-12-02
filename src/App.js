import { Navbar, Hero, Projects, Experience, Skills, Contact, About } from "./Components";

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
