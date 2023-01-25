import classes from "./WatchlistMovie.module.css";
import React, { useState, useEffect } from "react";
import done from "../assets/viewed.svg";
const WatchlistMovie = (props) => {
  const [viewedMovie, setViewedMovie] = useState(false);
  const { onHandleViewd, movie } = props;
  const { Poster, Title, imdbID } = props.movie;

  const viewdBtn = (
    <button
      onClick={() => {
        setViewedMovie(true);
        setTimeout(() => onHandleViewd(imdbID), 1200);
      }}
      className={classes.watchlist_btn}
    >
      Watched
    </button>
  );

  return (
    <li className={classes.movie_card}>
      <div className={classes.movie}>
        <img className={classes.poster} src={Poster} />
        <h2>{Title}</h2>
      </div>
      {viewedMovie ? (
        <img className={classes.done} src={done} alt="viewd" />
      ) : (
        viewdBtn
      )}
    </li>
  );
};

export default WatchlistMovie;
