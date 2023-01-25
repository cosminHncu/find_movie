import MovieOverview from "./MovieOverview";
import classes from "./MovieList.module.css";

import React, { useState, useEffect } from "react";

const MovieList = (props) => {
  const { onSetWatchlist, movieList, watchlist, onSetMovies } = props;
  const [displayMoveieList, setDisplayMovieList] = useState(false);

  let filterdList = movieList.filter(
    (movie) => movie.Type === `movie` && movie.Poster !== `N/A`
  );
  console.log(filterdList);

  //const handleMovieList = () => {
  //  let list = [];
  //  watchlist.map((w) =>
  //    filterdList.map((m) => {
  //      return w.imdbID !== m.imdbID ? list.push(m) : "";
  //    })
  //  );
  //  onSetMovies(list);
  //};

  const noMovies = (
    <div className={classes.movies_empty}>
      <p>No Movies Found</p>
    </div>
  );

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
