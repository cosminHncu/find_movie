import classes from "./MovieList.module.css";
import React, { useState } from "react";

import Watchlist from "../Watchlist/Watchlist";

const MovieList = (props) => {
  const { onSetWatchlist, movieList, displayWatchlist, watchlist } = props;

  const filterdList = movieList.filter(
    (movie) => movie.Type === `movie` && movie.Poster !== `N/A`
  );

  const resultMovies = (
    <div className={classes.showcase}>
      {filterdList.map((movie) => (
        <div className={classes.movie_card} key={movie.imdbID}>
          <img className={classes.poster} src={movie.Poster} />
          <div className={classes.overlay}>
            <button className={classes.overview_btn}>Overview</button>
            <button
              className={classes.watchlist_btn}
              onClick={() => onSetWatchlist(movie)}
            >
              +Watchlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <main className={classes.wrapper}>
      {displayWatchlist || resultMovies}
      {displayWatchlist && <Watchlist watchlist={watchlist} />}
    </main>
  );
};

export default MovieList;
