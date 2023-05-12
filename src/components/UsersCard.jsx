import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import styles from "./UsersCard.module.css";


export default function UsersCard() {
  const [users, setUsers] = useState(null);
  

  useEffect(() => {
    fetch(`https://randomuser.me/api?nat=${"fr"}`)
      .then((resp) => resp.json())
      .then((data) => setUsers(data.results[0]));
  }, []);

  return (
    <div className={styles.cardUsers}>
      {users && (
        <div className={styles.displayUser}>
          <div className={styles.usersPaper}>
            <img src={users.picture.large} alt="userimage" />
          </div>
          <h2 className={styles.usersWrite}>
            {users.name.first}&nbsp;
            {users.name.last}
            <br></br>
            Age:{users.registered.age}
            <br></br>
            Nationality:{users.nat}
            <br></br>
            Phone:{users.phone}
          </h2>
        </div>
      )}
    </div>
  );
}
