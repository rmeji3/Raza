import { useRef, useEffect, useState } from "react";
import "./Carousel.css";
import food from "./assets/food.jpg";
import rating from "./assets/rating.svg";
import { useNavigate } from "react-router-dom";

function StoreItem({ index }) {
  const navigate = useNavigate();

  return (
    <div className="store-carousel-item">
      <img src={food} alt="food" className="food-img" />
      <div className="store-text-wrapper">
        <div className="store-text-header-wrapper">
          <p className="store-carousel-text">Store {index + 1}</p>
          <div className="rating-wrapper">
            <p className="store-rating">4.5</p>
            <div className="rating-icon-wrapper">
              <img className="rating-icon" src={rating} />
            </div>
          </div>
        </div>
        <p className="store-description">
          Store description fafa fa f af fafafaf afaf afaf fa
        </p>
      </div>

      <button
        className="expand-store-carousel-button"
        onClick={() => navigate("/store")}
      >
        View Store
      </button>
    </div>
  );
}

export default function Carousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      if (scrollRef.current && scrollRef.current.contains(event.target)) {
        scrollRef.current.scrollLeft += event.deltaY * 2; // Adjust scroll speed
        event.preventDefault(); // Prevent default vertical scrolling
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <div className="store-carousel-wrapper">
      <div className="store-carousel-container" ref={scrollRef}>
        {Array.from({ length: 6 }).map((_, index) => (
          <StoreItem key={index} index={index} />
        ))}
      </div>
    </div>
  );
}