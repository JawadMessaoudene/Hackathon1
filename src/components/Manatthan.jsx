import UsersCard from "./UsersCard";
import Manatthanplan from "../assets/Manatthanplan.png";
import styles from "./Manatthan.module.css";

const Manatthan = () => {
  return (
    <>
      <div className={styles.Manatthan}>
        <div className={styles.titreManatthan}>
          <h1>Manatthan</h1>
        </div>
        <div className={styles.containerimageManatthan}>
          <img
            className={styles.imageManatthan}
            src={Manatthanplan}
            alt="Manatthan"
          />
        </div>
        <h1 className={styles.titreVolonteers}>Volonteers</h1>
        <UsersCard></UsersCard>
        <button className={styles.select}>SELECT</button>
      </div>
    </>
  );
};
export default Manatthan;
