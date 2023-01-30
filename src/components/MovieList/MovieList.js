import MovieOverview from "./MovieOverview";
import classes from "./MovieList.module.css";

const MovieList = (props) => {
  const { onSetWatchlist, movieList, onSetMovies } = props;
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

        return (
          <MovieOverview
            key={imdbID}
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