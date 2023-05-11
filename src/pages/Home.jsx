import usa from "../assets/usa.jpg";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className={styles.homePage}>
        <div className={styles.descriptionContainer}>
          <div className={styles.presentation}>
            <h1>Welcome to the NYC !</h1>
            <h2>See the hidden sides of the city.</h2>
            <h2>Hear the real New York stories.</h2>
            <h2>Experience it for free.</h2>
            <br />
            <div className={styles.informations}>
              <h3>Informations</h3>
              <p>
                Apple Volunteers books up quickly. <br />
                Please subit your request form at least 1 week before your
                arrival in New York City.
                <br />
                Please note : we cannot accept requests within 3 days of your
                arrival.
              </p> </div>{" "}
              <Link to="/form">
                <button className={styles.linkForm}>Request a volunteer</button>
              </Link>
           
          </div>
        </div>
        <img className={styles.nyPicture} src={usa} alt="pictureOfNYC" />
      </div>
    </>
  );
};
export default Home;
