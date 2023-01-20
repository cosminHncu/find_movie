import classes from "./MovieOverview.module.css";
import React, { useState } from "react";
import Modal from "../UI/Modal/Modal";

//"http://www.omdbapi.com/?s=star+wars&apikey=630ce116"
const MovieOverview = (props) => {
  const { Title, Poster } = props.movie;
  const [displayMovieData, setDisplayMovieData] = useState(false);
  const { onSetWatchlist, movieList, onSearchTitle, movieTitleSearch } = props;
  console.log(movieTitleSearch);
  console.log(displayMovieData);

  const movieCard = (
    <div className={classes.movie_card}>
      <img className={classes.poster} src={Poster} />
      <div className={classes.overlay}>
        <button
          onClick={() => {
            onSearchTitle(Title);
            setDisplayMovieData(true);
          }}
          className={classes.overview_btn}
        >
          Overview
        </button>
        <button
          className={classes.watchlist_btn}
          onClick={(event) => {
            event.currentTarget.disabled = true;
            onSetWatchlist(props.movie);
          }}
        >
          +Watchlist
        </button>
      </div>
    </div>
  );

  const movieOverview = (
    <div className={classes.movie_overview}>
      <img className={classes.poster} src={Poster} />
    </div>
  );

  return <>{displayMovieData ? <Modal>{movieOverview}</Modal> : movieCard}</>;
};

export default MovieOverview;
