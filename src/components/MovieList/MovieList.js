import MovieOverview from "./MovieOverview";
import classes from "./MovieList.module.css";

const MovieList = (props) => {
  const { watchlist, onSetWatchlist, movieList, onSetMovies } = props;
  let filterdList = movieList.filter(
    (movie) => movie.Type === `movie` && movie.Poster !== `N/A`
  );

  const noMovies = (
    <div className={classes.movies_empty}>
      <p>No Movies Found</p>
    </div>
  );

  const resultMovies = (
    <div className={classes.showcase}>
      {filterdList.map((movie) => {
        const { imdbID } = movie;
        {
          /*movie.test = false;*/
        }
        return (
          <MovieOverview
            key={imdbID}
            watchlist={watchlist}
            movie={movie}
            movieList={filterdList}
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
