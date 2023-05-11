import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import styles from "./UsersCard.module.css";

export default function UsersCard() {
  const [users, setUsers] = useState(null);

  const usersData = () => {
    fetch(`https://randomuser.me/api`)
      .then((res) => res.json())
      .then((data) => setUsers(data.results[0]))
      .catch((err) =>
        toast.error(
          `Your volonteers are temporarily unavailable. Please contact Marcelo for more information. ${err}`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        )
      );
  };
  useEffect(() => {
    usersData();
  }, []);
  return (
    <div className={styles.cardUsers}>
      <div>
        {users && (
          <div className={styles.displayUser}>
            <h2>{users.title}</h2>
            <h2>{users.content}</h2>
            <img
              className={styles.usersPaper}
              src={users.picture}
              alt="newspaper"
            />
          </div>
        )}
      </div>
    </div>
  );
}
