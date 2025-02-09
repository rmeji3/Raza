import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Carousel from "./Carousel";
import about from "./assets/about_us_icon.svg";
import "./Home.css";
import AboutUs from "./Aboutus";
import StorePage from "./StorePage";
import header from "./assets/header.svg";
import header2 from "./assets/header2.svg"; // ✅ Import desktop header

function Header() {
  return (
    <div className="header-wrapper">
      <Link to="/about" className="about-icon-link">
        <img src={about} alt="about" className="about-icon" />
      </Link>

      <h1 className="header">Raza</h1>
      <div className="header-space-right"></div>
    </div>
  );
}
function Divider() {
  const [currentHeader, setCurrentHeader] = useState(header);

  useEffect(() => {
    const updateHeader = () => {
      if (window.innerWidth > 1024) {
        setCurrentHeader(header2); // Switch to desktop header
      } else {
        setCurrentHeader(header); // Keep mobile header
      }
    };

    updateHeader(); // Run once on mount
    window.addEventListener("resize", updateHeader); // Listen for screen resize

    return () => {
      window.removeEventListener("resize", updateHeader); // Cleanup on unmount
    };
  }, []);
  return (
    <div class="custom-shape-divider-top-1738993381">
      <img src={currentHeader} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Divider />
              <Carousel />
            </>
          }
        />

        <Route path="/store" element={<StorePage />} />

        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;