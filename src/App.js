
// import './App.css';
// import Navigate from './Navigate';
// import AuthForm from './AuthForm'
// import { SplitScreen } from './SplitScreen';
// function App() {
//   return (
//   // <Navigate/>
//  //<AuthForm/>
//  <SplitScreen/>
//   );
// }

// export default App;
import "./styles.css";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import Skills from "./Skills";
import Projects from "./Project";
import Contact from "./Contact";
import WorkExperience from "./WorkExperience";
export default function App() {
  return (
<>
      <Navbar />
      <div className="space"></div>
      <HeroSection/>
      <div id="about">
  <InfoSection />
</div>

<div id="skill">
  <Skills />
</div>

<div id="project">
  <Projects />
</div>
<div id="work">
  <WorkExperience/>
</div>
<div id="contact">
  <Contact />
</div>
  </>
  );
}
