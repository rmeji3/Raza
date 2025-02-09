import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import storeImage from "./assets/food.jpg";
import flower from "./assets/flower.svg";

import "./StorePage.css";

const StorePage = () => {
  const navigate = useNavigate();

  return (
    <div className="store-page">
      <div className="header-store">
        <div className="back-button-wrapper">
          <button className="story-back-button" onClick={() => navigate(-1)}>
            <ArrowLeft className="arrow-icon-store" />
          </button>
        </div>
      </div>
      

      <div className="store-banner">
        <img src={storeImage} alt="Wingstop" className="store-banner-img" />
      </div>

      <div className="store-info">
          <p className="store-title">Store 1</p>
          <p className="store-rating">4.5</p>
      </div>

      <div className="menu-image-wrapper">
        <img src={flower} alt="menu flower" className="menu-flower" />
      </div>

      <div className="text-menu">
        <h2 className="menu-title">Menu</h2>
        <ul className="menu-list">
          <li className="menu-item">
            <span className="dish-name">Tamale</span>
            <span className="dish-price">$15</span>
          </li>
          <li className="menu-item">
            <span className="dish-name">Tamale</span>
            <span className="dish-price">$12</span>
          </li>
          <li className="menu-item">
            <span className="dish-name">Tamale</span>
            <span className="dish-price">$14</span>
          </li>
          <li className="menu-item">
            <span className="dish-name">Tamale</span>
            <span className="dish-price">$13</span>
          </li>
          <li className="menu-item">
            <span className="dish-name">Tamale</span>
            <span className="dish-price">$10</span>
          </li>
          <li className="menu-item">
            <span className="dish-name">Tamale</span>
            <span className="dish-price">$8</span>
          </li>
          <li className="menu-item">
            <span className="dish-name">Tamale</span>
            <span className="dish-price">$7</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StorePage;