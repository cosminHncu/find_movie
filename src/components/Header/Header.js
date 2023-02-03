import classes from "./Header.module.css";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
const Header = (props) => {
  const {
    onSetMovieSearch,
    onSetDisplayWatchlist,
    watchlist,
    onHandleLogo,
    movieSearch,
  } = props;

  const handleChange = (e) => {
    onSetMovieSearch(e.target.value);
  };

  const handleEnter = (e) => e.preventDefault();

  const watchlist_lable = <p className={classes.watchlist_lable}>watchlist</p>;

  return (
    <nav className={classes.navbar}>
      <button
        className={classes.logo_btn}
        onClick={() => {
          onHandleLogo();
        }}
      >
        <div className={classes.logo}>
          <img className={classes.logo_svg} src={logo} alt="logo icon" />
          <h3>
            <span className={classes.logo_span}>find</span>Movie
          </h3>
        </div>
      </button>

      <div className={classes.nav_control}>
        <form onSubmit={handleEnter} className={classes.search}>
          <img className={classes.search_svg} src={search} alt="search icon" />
          <input
            onChange={handleChange}
            value={movieSearch}
            className={classes.search_box}
            placeholder="Type to search"
          />
        </form>

        <div className={classes.watchlist}>
          <button
            onClick={() => onSetDisplayWatchlist(true)}
            className={classes.watchlist_btn}
          >
            <span className={classes.watchlist_badge}>{watchlist.length}</span>
            {watchlist_lable}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
