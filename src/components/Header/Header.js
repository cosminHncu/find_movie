import classes from "./Header.module.css";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";

const Header = (props) => {
  const handleChange = (e) => props.onSetMovieSearch(e.target.value);
  return (
    <nav className={classes.navbar}>
      <section className={classes.logo}>
        <img src={logo} alt="logo icon" />
        <h3>
          <span className={classes.logo_span}>find</span>movie
        </h3>
      </section>
      <form onChange={handleChange} className={classes.search}>
        <img src={search} alt="search icon" />
        <input
          className={classes.search_box}
          value={props.value}
          placeholder="Type to search"
        />
      </form>
      <ul className={classes.nav_list}>
        <button className={classes.nav_btn}>home</button>
        <button className={classes.nav_btn}>list</button>
      </ul>
    </nav>
  );
};

export default Header;
