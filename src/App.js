import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import classes from "./App.module.css";
import Wave from "./components/UI/Wave/Wave";
import MovieList from "./components/MovieList/MovieList";
import MainPage from "./components/MainPage/MainPage";
import Watchlist from "./components/Watchlist/Watchlist";
import { ThreeCircles } from "react-loader-spinner";

const App = () => {
  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [displayWatchlist, setDisplayWatchlist] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchMovie = async (movieSearch) => {
    try {
      setLoading(true);
      const url = `https://www.omdbapi.com/?s=${movieSearch}&apikey=630ce116`;
      const request = await fetch(url);
      const response = await request.json();
      if (response.Search) {
        const filtered = filterByWatchlist(response.Search, watchlistKeys);
        setMovies(filtered);
      }
      setLoading(false);
    } catch (error) {
      console.log("error: ", error);
      setLoading(false);
    }
  };
  const watchlistKeys = watchlist.map((movie) => movie.imdbID);

  const handleLogo = () => {
    setMovieSearch("");
    setMovies([]);
    setDisplayWatchlist(false);
  };

  const handleAddWathlist = (movie) => {
    const list = [movie, ...watchlist];

    setWatchlist(list);
  };

  const handleViewd = (imdbID) => {
    const list = watchlist.filter((movie) => movie.imdbID !== imdbID);
    setWatchlist(list);
  };

  const filterByWatchlist = (movies, watchlistKeys) =>
    movies.filter((movie) => !watchlistKeys.includes(movie.imdbID));

  useEffect(() => {
    if (movieSearch === "") setMovies([]);
    searchMovie(movieSearch);
    setDisplayWatchlist(false);
  }, [movieSearch]);

  return (
    <div className={classes.app}>
      <header>
        <Header
          movieSearch={movieSearch}
          watchlist={watchlist}
          onSetMovieSearch={setMovieSearch}
          onSetDisplayWatchlist={setDisplayWatchlist}
          onHandleLogo={handleLogo}
        />
        <Wave />
      </header>
      <main>
        {loading && (
          <div className={classes.loading}>
            <ThreeCircles
              height="100"
              width="100"
              color="#fff"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </div>
        )}

        {!displayWatchlist &&
          (movies.length <= 0 ? (
            <MainPage />
          ) : (
            <MovieList
              watchlistKeys={watchlistKeys}
              watchlist={watchlist}
              displayWatchlist={displayWatchlist}
              movies={movies}
              onSetMovies={setMovies}
              onSetWatchlist={handleAddWathlist}
            />
          ))}
        {displayWatchlist && (
          <Watchlist
            watchlist={watchlist}
            onHandleViewd={handleViewd}
            setWatchlist={setWatchlist}
          />
        )}
      </main>
      <footer>
        <p>
          created by{" "}
          <a target="_blank" href="https://github.com/cosminHncu">
            cosminHncu
          </a>
        </p>
      </footer>
      ;
    </div>
  );
};

export default App;
