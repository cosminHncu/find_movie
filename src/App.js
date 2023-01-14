//"http://www.omdbapi.com/?s=star+wars&apikey=630ce116"
import Header from "./components/Header/Header";
import classes from "./App.module.css";
import Wave from "./components/UI/Wave/Wave";
import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList/MovieList";

const App = () => {
  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async (movieSearch) => {
    const url = `http://www.omdbapi.com/?s=${movieSearch}&apikey=630ce116`;
    const request = await fetch(url);
    const response = await request.json();
    if (response.Search) {
      setMovies(response.Search);
    }
  };

  useEffect(() => {
    searchMovie(movieSearch);
  }, [movieSearch]);

  return (
    <>
      <header>
        <Header onSetMovieSearch={setMovieSearch} />
        <Wave />
      </header>
      <main>
        <MovieList movieList={movies} />
      </main>
    </>
  );
};

export default App;
