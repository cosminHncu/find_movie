import classes from "./WatchlistMovie.module.css";
import React, { useState, useEffect } from "react";
import done from "../assets/viewed.svg";
const WatchlistMovie = (props) => {
  const [viewed, setViewd] = useState(false);
  const { Poster, Title } = props.movie;

  const viewdBtn = (
    <button onClick={() => setViewd(true)} className={classes.watchlist_btn}>
      Watched
    </button>
  );

  return (
    <li className={classes.movie_card}>
      <div className={classes.movie}>
        <img className={classes.poster} src={Poster} />
        <h2>{Title}</h2>
      </div>
      {viewed ? (
        <img className={classes.done} src={done} alt="viewd" />
      ) : (
        viewdBtn
      )}
    </li>
  );
};

export default WatchlistMovie;
