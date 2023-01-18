import classes from "./MovieCard.module.css";

const MovieCard = (props) => {
  return (
    <div className={classes.movie_card}>
      {props.children}
      <div className={classes.overlay}>
        <button>{props.children}</button>
        <button>+Watchlist</button>
      </div>
    </div>
  );
};

export default MovieCard;
