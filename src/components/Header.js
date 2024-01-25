import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/photo-1552566626-52f8b828add9.avif";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon: Redefining Mediterranean cuisine with a modern twist
            in Chicago. Our vibrant dishes capture the essence of tradition and
            innovation. Chic ambiance, diverse menu—join us for a delightful
            culinary journey.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
