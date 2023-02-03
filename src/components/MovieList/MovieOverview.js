import classes from "./MovieOverview.module.css";
import React, { useState } from "react";
import { Circles } from "react-loader-spinner";

const MovieOverview = (props) => {
  const { onSetWatchlist, movie } = props;
  const { Title, Poster } = props.movie;
  const [displayMovieData, setDisplayMovieData] = useState(false);
  const [movieTitleSearch, setMovieTitleSearch] = useState(null);

  const searchTitle = async (Title) => {
    try {
      const url = `https://www.omdbapi.com/?t=${Title}&apikey=630ce116`;
      const request = await fetch(url);
      const response = await request.json();
      setMovieTitleSearch(response);
    } catch (error) {
      console.log("error", error);
    }
  };

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

        {
          <button
            className={classes.watchlist_btn}
            onClick={() => {
              movie.Type = ``;
              onSetWatchlist(props.movie);
            }}
          >
            +Watchlist
          </button>
        }
      </div>
    </div>
  );

  const movieOverview = movieTitleSearch ? (
    <div className={classes.movie_overview}>
      <h1 className={classes.title}>{Title}</h1>

      <h4 className={classes.movie_info}>
        <span className={classes.runtime}>{movieTitleSearch.Runtime}</span>
        <span className={classes.director}> {movieTitleSearch.Director}</span>
      </h4>

      <p className={classes.plot}>{movieTitleSearch.Plot}</p>

      <button
        className={classes.close_overview_btn}
        onClick={() => setDisplayMovieData(false)}
      >
        X
      </button>
    </div>
  ) : (
    <div className={classes.loading}>
      <Circles
        height="80"
        width="80"
        color="#fff"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );

  return <>{displayMovieData ? movieOverview : movieCard}</>;
};

export default MovieOverview;
