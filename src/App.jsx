import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import PortfolioPage from "./PortfolioPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import NavbarPage from "./NavbarPage";

function App() {
  return (
    <>
    <NavbarPage/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
