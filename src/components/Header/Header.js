import classes from "./Header.module.css";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";

const Header = (props) => {
  const { onSetMovieSearch, onSetDisplayWatchlist, watchlist } = props;

  const handleChange = (e) => {
    onSetMovieSearch(e.target.value);
  };

  const handleEnter = (e) => e.preventDefault();

  return (
    <nav className={classes.navbar}>
      <section className={classes.logo}>
        <img src={logo} alt="logo icon" />
        <h3>
          <span className={classes.logo_span}>find</span>Movie
        </h3>
      </section>
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
      <ul className={classes.nav_list}>
        <button className={classes.nav_btn}>
          <a href="index.html">home</a>
        </button>
        <button
          onClick={() => onSetDisplayWatchlist(true)}
          className={classes.nav_btn}
        >
          <span className={classes.watchlist_badge}>{watchlist.length}</span>
          watchlist
        </button>
      </ul>
    </nav>
  );
};

export default Header;
