import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="scrollbar-hide">
      <Intro />
      <Skill />
      <Project />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
