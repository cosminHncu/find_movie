import classes from "./Watchlist.module.css";
import React, { useState } from "react";
const Watchlist = (props) => {
  const { watchlist } = props;

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
      <h1>Sorry, your watchlist is empty</h1>
    </div>
  );

  return (
    <>
      <h1 className={classes.header}>Watchlist</h1>
      {/*{watchlist.length > 0 && (
        <section className={classes.showcase}>{list}</section>
      )}*/}
      {watchlist.length > 1 ? (
        <section className={classes.showcase}>{list}</section>
      ) : (
        watchlist_empty
      )}
    </>
  );
};

export default Watchlist;
