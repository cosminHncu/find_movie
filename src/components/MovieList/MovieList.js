import classes from "./MovieList.module.css";
import React, { useState } from "react";
import dude from "../assets/dude.svg";
const MovieList = (props) => {
  const list = (
    <div className={classes.showcase}>
      {props["movieList"].map((movie) => (
        <div>
          <img className={classes.poster} src={movie.Poster} />
        </div>
      ))}
    </div>
  );
  return (
    <section className={classes.wrapper}>
      {list}
      <img className={classes.dude} src={dude} />
    </section>
  );
};

export default MovieList;
