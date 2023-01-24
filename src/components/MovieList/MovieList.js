import MovieOverview from "./MovieOverview";
import classes from "./MovieList.module.css";

//import React, { useState, useEffect } from "react";

const MovieList = (props) => {
  const { onSetWatchlist, movieList, watchlist, onSetMovies } = props;
  const filterdList = movieList.filter(
    (movie) => movie.Type === `movie` && movie.Poster !== `N/A`
  );

  const noMovies = (
    <div className={classes.movies_empty}>
      <p>No Movies Found</p>
    </div>
  );
  //to do
  //useEffect(() => {
  //  onSetMovies(
  //    filterdList.map((m1) =>
  //      watchlist.map((m2) => {
  //        if (m1.imdbID !== m2.imdbID) return m1;
  //      })
  //    )
  //  );
  //}, [filterdList]);

  const resultMovies = (
    <div className={classes.showcase}>
      {filterdList.map((movie) => {
        const { imdbID } = movie;
        return (
          <MovieOverview
            key={imdbID}
            movie={movie}
            movieList={movieList}
            onSetMovies={onSetMovies}
            onSetWatchlist={onSetWatchlist}
          />
        );
      })}
    </div>
  );

  return (
    <main className={classes.wrapper}>
      {filterdList.length > 0 ? resultMovies : noMovies}
    </main>
  );
};

export default MovieList;
