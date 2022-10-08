import React, { useState } from "react";
import requests, { imgToRequest } from "../../constants/request";
import { useUrl } from "../../hooks/hooks";
import classes from "./Banner.module.css";

const Banner = () => {
  // Movie in banner state
  const [movie, setMovie] = useState([{}]);

  // Convert response data
  const converter = (data) => [
    data.results[Math.floor(Math.random() * data.results.length)],
  ];

  // Fetch data
  useUrl(requests.fetchNetflixOriginals, converter, setMovie);

  // Render
  return (
    <div
      className={classes["banner"]}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
          url("${imgToRequest(movie[0].backdrop_path, "original")}")`,
      }}
      onClick={() => console.log(movie[0])}
    >
      <div className={classes["banner__title"]}>{movie[0].name}</div>
      <div className={classes["banner__actions"]}>
        <button>Play</button>
        <button>My List</button>
      </div>
      <div className={classes["banner__overview"]}>{movie[0].overview}</div>
    </div>
  );
};

export default Banner;
