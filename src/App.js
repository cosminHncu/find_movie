//"http://www.omdbapi.com/?s=star+wars&apikey=630ce116"
import Header from "./components/Header/Header";
//import classes from "./App.module.css";
import Wave from "./components/UI/Wave/Wave";
import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList/MovieList";
import MainPage from "./components/MainPage/MainPage";
import Watchlist from "./components/Watchlist/Watchlist";

const App = () => {
  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [displayWatchlist, setDisplayWatchlist] = useState(false);
  const [movieTitleSearch, setMovieTitleSearch] = useState();

  //lol

  const searchMovie = async (movieSearch) => {
    const url = `http://www.omdbapi.com/?s=${movieSearch}&apikey=630ce116`;
    const request = await fetch(url);
    const response = await request.json();
    if (response.Search) {
      setMovies(response.Search);
    }
  };

  const searchTitle = async (Title) => {
    const url = `http://www.omdbapi.com/?t=${Title}&apikey=630ce116`;
    const request = await fetch(url);
    const response = await request.json();
    setMovieTitleSearch(response);
  };

  const handleLogo = () => setMovies([]);

  const handleAddWathlist = (movie) => {
    const list = [...watchlist, movie];
    setWatchlist(list);
  };

  const cleaner = () => {
    if (movieSearch === ``) setMovies([]);
  };

  useEffect(() => {
    searchMovie(movieSearch);
    setDisplayWatchlist(false);
    cleaner();
  }, [movieSearch]);

  return (
    <>
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
              watchlist={watchlist}
              displayWatchlist={displayWatchlist}
              movieList={movies}
              movieTitleSearch={movieTitleSearch}
              onSearchTitle={searchTitle}
              onSetWatchlist={handleAddWathlist}
            />
          ))}
        {displayWatchlist && <Watchlist watchlist={watchlist} />}
      </main>
    </>
  );
};

export default App;
