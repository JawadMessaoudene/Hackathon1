import UsersCard from "./UsersCard";
import Bronxplan from "../assets/Bronxplan.png";
import styles from "./Bronx.module.css";

const Bronx = () => {
  return (
    <>
    <div className={styles.Bronx}>
      <div className={styles.titreBronx}>
        <h1>Bronx</h1>
      </div>
      <div className={styles.containerimageBronx}>
        <img className={styles.imageBronx} src={Bronxplan} alt="Bronx" />
      </div>
      <h1 className={styles.titreVolonteers}>Volonteers</h1>
      <UsersCard></UsersCard>
      <button className={styles.select}>SELECT</button>
      </div>
    </>
  );
};
export default Bronx;
