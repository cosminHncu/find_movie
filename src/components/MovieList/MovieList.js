import classes from "./MovieList.module.css";
import React, { useState } from "react";
import dude from "../assets/dude.svg";

const MovieList = (props) => {
  const { onSetWatchlist } = props;

  const list = (
    <div className={classes.showcase}>
      {props["movieList"]
        .filter((movie) => movie.Type === `movie`)
        .map((movie) => (
          <div className={classes.movie_card} key={movie.imdbID}>
            <img className={classes.poster} src={movie.Poster} />
            <div className={classes.overlay}>
              <button className={classes.watchlist_btn}>Overview</button>
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
    <section className={classes.wrapper}>
      {list}
      <img className={classes.dude} src={dude} />
    </section>
  );
};

export default MovieList;
