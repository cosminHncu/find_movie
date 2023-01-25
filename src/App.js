//"http://www.omdbapi.com/?s=star+wars&apikey=630ce116"
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import classes from "./App.module.css";
import Wave from "./components/UI/Wave/Wave";
import MovieList from "./components/MovieList/MovieList";
import MainPage from "./components/MainPage/MainPage";
import Watchlist from "./components/Watchlist/Watchlist";

const App = () => {
  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [displayWatchlist, setDisplayWatchlist] = useState(false);

  const searchMovie = async (movieSearch) => {
    const url = `https://www.omdbapi.com/?s=${movieSearch}&apikey=630ce116`;
    const request = await fetch(url);
    const response = await request.json();
    if (response.Search) {
      setMovies(response.Search);
    }
  };

  const handleLogo = () => {
    //reset
    setMovies([]);
    setDisplayWatchlist(false);
  };

  const handleAddWathlist = (movie) => {
    //add to watchlist
    const list = [...watchlist, movie];
    setWatchlist(list);
  };

  const handleViewd = (imdbID) => {
    //update the watchlist when a movie is viewd
    const list = watchlist.filter((movie) => movie.imdbID !== imdbID);
    setWatchlist(list);
  };

  //const handleMovieList = () => {
  //  let list = [];
  //  watchlist.map((w) =>
  //    movies.map((m) => {
  //      return w.imdbID !== m.imdbID ? list.push(m) : "";
  //    })
  //  );
  //  setMovies(list);
  //};

  useEffect(() => {
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
        {!displayWatchlist &&
          (movies.length <= 0 ? (
            <MainPage />
          ) : (
            <MovieList
              onSetMovies={setMovies}
              watchlist={watchlist}
              displayWatchlist={displayWatchlist}
              movieList={movies}
              onSetWatchlist={handleAddWathlist}
            />
          ))}
        {displayWatchlist && (
          <Watchlist
            onHandleViewd={handleViewd}
            setWatchlist={setWatchlist}
            watchlist={watchlist}
          />
        )}
      </main>
    </div>
  );
};

export default App;
