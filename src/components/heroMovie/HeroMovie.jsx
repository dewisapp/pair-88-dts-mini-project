import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import React from "react";
import "./heroMovie.css";
import background from "../../images/photo-background.jpg";
import titleMovie from "../../images/titleMovie.svg";

const HeroMovie = () => {
  return (
    <div className="hero-movie-container">
      <img style={{ width: "100%" }} src={background} alt="background" />
      <div className="info-hero-movie">
        <img src={titleMovie} alt="title-movie" />
        <span className="desc-movie">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          assumenda laborum, placeat totam vel reprehenderit nesciunt nisi
          deleniti facilis dolorum qui et recusandae ullam deserunt voluptatibus
          commodi, aperiam aliquid quia.
        </span>
        <div className="buttons">
          <button className="play-button">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more-button">
            <InfoOutlined />
            <span>More Information</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroMovie;
