import classes from "./Header.module.css";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";

const Header = (props) => {
  const { onSetMovieSearch, onSetDisplayWatchlist, watchlist, onHandleLogo } =
    props;

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
          onSetMovieSearch("");
          //here
        }}
      >
        <section className={classes.logo}>
          <img className={classes.logo_svg} src={logo} alt="logo icon" />
          <h3>
            <span className={classes.logo_span}>find</span>Movie
          </h3>
        </section>
      </button>
      <form
        onSubmit={handleEnter}
        onChange={handleChange}
        className={classes.search}
      >
        <img src={search} alt="search icon" />
        <input
          className={classes.search_box}
          value={props.searchSearch}
          placeholder="Type to search"
        />
      </form>
      <div className={classes.nav_list}>
        <button
          onClick={() => onSetDisplayWatchlist(true)}
          className={classes.nav_btn}
        >
          <span className={classes.watchlist_badge}>{watchlist.length}</span>
          {watchlist_lable}
        </button>
      </div>
    </nav>
  );
};

export default Header;
