import MovieOverview from "./MovieOverview";
import classes from "./MovieList.module.css";

const MovieList = (props) => {
  const { watchlist, onSetWatchlist, movies, onSetMovies } = props;
  let filterdList = movies.filter(
    (movie) => movie.Type === `movie` && movie.Poster !== `N/A`
  );

  const noMovies = (
    <div className={classes.movies_empty}>
      {watchlist.length === 0 ? (
        <p>No Movies Found</p>
      ) : (
        <p>You Can Find The Results In Watchlist</p>
      )}
    </div>
  );

  const resultMovies = (
    <div className={classes.showcase}>
      {filterdList.map((movie) => {
        const { imdbID } = movie;

        return (
          <MovieOverview
            key={imdbID}
            watchlist={watchlist}
            movie={movie}
            movies={filterdList}
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
