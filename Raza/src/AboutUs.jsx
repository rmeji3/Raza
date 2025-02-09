import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "./assets/logo.svg";
import "./AboutUs.css";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="root-2">
      <div className="about-us-page">
        <div class="about-us-header">
          {/* back-button*/}
          <button onClick={() => navigate(-1)} className="back-button">
            <ArrowLeft className="arrow-icon" />
          </button>

          {/* title */}
          <h1 className="about-title">About us</h1>

          {/* space */}
          <div className="about-us-header-space"></div>
        </div>
        <div className="about-us-content">
          {/* desc */}
          <p className="about-text-1">
            We are Raza. We are dedicated to bringing Latino communities to
            light by promoting small businesses and individuals with products to
            sell in Chicago.
          </p>
          <p className="about-text-2">
            Thank you for taking the time to support small Latino businesses.
          </p>
        </div>
        {/* Logo png */}
        <img src={logo} alt="Raza Logo" className="about-logo" />
      </div>
    </div>
  );
};

export default AboutUs;