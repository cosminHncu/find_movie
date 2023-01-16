//"http://www.omdbapi.com/?s=star+wars&apikey=630ce116"
import Header from "./components/Header/Header";
import classes from "./App.module.css";
import Wave from "./components/UI/Wave/Wave";
import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList/MovieList";
import MainPage from "./components/MainPage/MainPage";

const App = () => {
  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  console.log(watchlist);
  const searchMovie = async (movieSearch) => {
    const url = `http://www.omdbapi.com/?s=${movieSearch}&apikey=630ce116`;
    const request = await fetch(url);
    const response = await request.json();
    if (response.Search) {
      setMovies(response.Search);
    }
  };

  const handleAddWathlist = (movie) => {
    const list = [...watchlist, movie];
    setWatchlist(list);
  };

  useEffect(() => {
    searchMovie(movieSearch);
  }, [movieSearch]);

  return (
    <>
      <header>
        <Header
          watchlist={watchlist}
          movieSearch={movieSearch}
          onSetMovieSearch={setMovieSearch}
        />
        <Wave />
      </header>
      <main>
        {movies.length > 0 || <MainPage />}
        <MovieList onSetWatchlist={handleAddWathlist} movieList={movies} />
      </main>
    </>
  );
};

export default App;
