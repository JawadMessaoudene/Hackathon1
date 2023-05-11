import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import styles from "./UsersCard.module.css";

export default function UsersCard() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((resp) => resp.json())
      .then((data) => setUsers(data.results[0]));
  }, []);

  return (
    <div className={styles.cardUsers}>
      {users && (
        <div className={styles.displayUser}>
          <img
            className={styles.usersPaper}
            src={users.picture.large}
            alt="userimage"
          />
          <h2>
            {users.name.first}&nbsp;
            {users.name.last}
            <br></br>
            Age:{users.registered.age}
            <br></br>
            Email:{users.email}
            <br></br>
            Phone:{users.phone}
          </h2>
        </div>
      )}
    </div>
  );
}
