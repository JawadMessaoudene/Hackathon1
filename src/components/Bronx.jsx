import UsersCard from "./UsersCard";
import Bronxplan from "../assets/Bronxplan.png";
import styles from "./Bronx.module.css";

const Bronx = () => {
  return (
    <>
      <div className={styles.titreBron}>
        <h1>Bronx</h1>
      </div>
      <div className={styles.containerimageBron}>
        <img className={styles.imageBron} src={Bronxplan} alt="Bronx" />
      </div>
      <h1 className={styles.titreVolonteers}>Volonteers</h1>
      <UsersCard></UsersCard>
      <button className={styles.select}>SELECT</button>
    </>
  );
};
export default Bronx;
