import { useEffect, useState } from "react";
import "../App.css";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // always show near top
      if (currentScrollY < 100) {
        setShowNavbar(true);
      }
      // scrolling down → hide
      else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      }
      // scrolling up → show
      else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <nav
      className={`navbar ${
        showNavbar
          ? "navbar-show"
          : "navbar-hide"
      }`}
    >
      <div className="logo">
        G10 Studios
      </div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#services">
          Services
        </a>
        <a href="#projects">
          Projects
        </a>
        <a href="#roadmap">
          Roadmap
        </a>
        <a href="#contact">
          Contact
        </a>
      </div>

      <button className="nav-btn">
        Enter Studio
      </button>
    </nav>
  );
}