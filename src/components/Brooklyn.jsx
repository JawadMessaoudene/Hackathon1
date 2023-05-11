import UsersCard from "./UsersCard";
import Brooklynplan from "../assets/Brooklynplan.png";
import styles from "./Brooklyn.module.css";

const Brooklyn = () => {
  return (
    <>
      <div className={styles.Brooklyn}>
        <div className={styles.titreBrooklyn}>
          <h1>Brooklyn</h1>
        </div>
        <div className={styles.containerimageBrooklyn}>
          <img
            className={styles.imageBrooklyn}
            src={Brooklynplan}
            alt="Brooklyn"
          />
        </div>
        <h1 className={styles.titreVolonteers}>Volonteer</h1>
        <UsersCard></UsersCard>
        <button className={styles.select}>SELECT</button>
      </div>
    </>
  );
};
export default Brooklyn;
