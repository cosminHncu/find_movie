import classes from "./Watchlist.module.css";
import React, { useState } from "react";
const Watchlist = (props) => {
  const { watchlist } = props;
  console.log(watchlist);

  const list = (
    <ul className={classes.list}>
      {watchlist.map((movie) => (
        <li className={classes.movie_card} key={movie.imdbID}>
          <div className={classes.movie}>
            <img className={classes.poster} src={movie.Poster} />
            <h2>{movie.Title}</h2>
          </div>
          <button className={classes.watchlist_btn}>Watched</button>
        </li>
      ))}
    </ul>
  );

  const watchlist_empty = (
    <div className={classes.watchlist_empty}>
      <p>Sorry, your watchlist is empty</p>
    </div>
  );

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>Watchlist</h1>
      {watchlist.length > 0 && (
        <section className={classes.showcase}>{list}</section>
      )}
      {!watchlist.length > 0 && (
        <section className={classes.showcase}>{watchlist_empty}</section>
      )}
    </div>
  );
};

export default Watchlist;
