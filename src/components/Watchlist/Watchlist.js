import classes from "./Watchlist.module.css";
import WatchlistMovie from "./WatchlistMovie";

const Watchlist = (props) => {
  const { watchlist, onHandleViewd } = props;

  const list = (
    <ul className={classes.list}>
      {watchlist.map((movie) => {
        const { imdbID } = movie;
        return (
          <WatchlistMovie
            onHandleViewd={onHandleViewd}
            watchlist={watchlist}
            movie={movie}
            key={imdbID}
          />
        );
      })}
    </ul>
  );

  const watchlist_empty = (
    <div className={classes.watchlist_empty}>
      <p>Sorry, your watchlist is empty</p>
    </div>
  );

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>Watchlist</h1>
      {watchlist.length > 0 && (
        <section className={classes.showcase}>{list}</section>
      )}
      {!watchlist.length > 0 && (
        <section className={classes.showcase}>{watchlist_empty}</section>
      )}
    </div>
  );
};

export default Watchlist;
