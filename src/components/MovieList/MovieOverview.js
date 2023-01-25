import classes from "./MovieOverview.module.css";
import React, { useState } from "react";

const MovieOverview = (props) => {
  const { Title, Poster } = props.movie;
  //const [overviewStatus, setOverviewStatus] = useState(false);
  const [displayMovieData, setDisplayMovieData] = useState(false);
  const [movieTitleSearch, setMovieTitleSearch] = useState(null);

  const searchTitle = async (Title) => {
    const url = `https://www.omdbapi.com/?t=${Title}&apikey=630ce116`;
    const request = await fetch(url);
    const response = await request.json();
    setMovieTitleSearch(response);
  };

  const { onSetWatchlist } = props;

  const movieCard = (
    <div className={classes.movie_card}>
      <img className={classes.poster} src={Poster} />
      <div className={classes.overlay}>
        <button
          onClick={() => {
            setDisplayMovieData(true);
            searchTitle(Title);
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

  const movieOverview = movieTitleSearch ? (
    <div className={classes.movie_overview}>
      <h1 className={classes.title}>{Title}</h1>

      <h4 className={classes.director}>
        <span className={classes.runtime}>{movieTitleSearch.Runtime}</span>
        {movieTitleSearch.Director}
      </h4>

      <p className={classes.plot}>{movieTitleSearch.Plot}</p>

      <div className={classes.control_mobile}>
        <button
          className={classes.close_overview_btn}
          onClick={() => setDisplayMovieData(false)}
        >
          X
        </button>
        <div className={classes.watchlist_btn_mobile}>
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
    </div>
  ) : (
    <div>Something went wrong, please try again!</div>
  );

  return <>{displayMovieData ? movieOverview : movieCard}</>;
};

export default MovieOverview;

//maybe
/*<img className={classes.poster} src={Poster} />*/
