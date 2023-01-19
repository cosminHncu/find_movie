import classes from "./MainPage.module.css";
import friends from "../assets/new.svg";

const MainPage = () => {
  const main = (
    <main className={classes.main}>
      <section className={classes.card}>
        <h1 className={classes.heading_txt}>
          Go watch <br />a Movie!
        </h1>

        <p className={classes.heading_sub_txt}>
          Find and explore your next favorite movie <br />
          Discover a comprehensive movie search website where you can easily
          find and read about your favorite films, including ratings, and plot
          summaries
        </p>
      </section>
      <img className={classes.friends} src={friends} />
    </main>
  );

  return <>{main}</>;
};

export default MainPage;
