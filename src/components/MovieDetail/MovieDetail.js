import React from "react";
import { imgToRequest } from "../../constants/request";
import YouTube from "../YouTube/YouTube";
import "./MovieDetail.css";

const MovieDetail = (props) => {
  return (
    <div className="movie-detail">
      <div className="movie-detail__text">
        <div className="movie-detail__title">
          {props.movie.title || props.movie.name}
        </div>
        <div className="movie-detail__date">
          Release date: {props.movie.first_air_date || "Updating"}
        </div>
        <div className="movie-detail__vote">
          Vote: {props.movie.vote_average} / 10
        </div>
        <div className="movie-detail__overview">{props.movie.overview}</div>
      </div>
      <div className="movie-detail__media">
        {props.videoId === "no_video" ? (
          <img
            src={
              !props.movie.backdrop_path
                ? require("../../images/no-image__backdrop-md.png")
                : imgToRequest(props.movie.backdrop_path, "w780")
            }
            alt="movie"
          />
        ) : (
          <YouTube embedId={props.videoId} width="100%" height="400" />
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
