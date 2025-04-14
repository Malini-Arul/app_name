import React, { useState ,useEffect} from "react";
import "./styles.css";
import { FaBars, FaTimes , FaMoon, FaSun} from "react-icons/fa"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");


  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About me</a></li>
        <li><a href="#skill" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#project" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#work" onClick={() => setIsOpen(false)}>Experience</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        <button onClick={toggleTheme} className="theme-icon">
          {theme === "light" ?<FaSun /> : <FaMoon/>}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
