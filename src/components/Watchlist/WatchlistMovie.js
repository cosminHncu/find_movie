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
        localStorage.setItem(`${movie.imdbID}`, [movie.Poster, movie.Title]);
        setViewedMovie(true);
        setTimeout(() => onHandleViewd(imdbID), 500);
      }}
      className={classes.watchlist_btn}
    >
      Remove
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
