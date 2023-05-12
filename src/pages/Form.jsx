import styles from "./Form.module.css";
import { useState } from "react";
import Brooklyn from "../components/Brooklyn";
import Bronx from "../components/Bronx";
import Mannatthan from "../components/Manatthan";
import countries from "../assets/Countries.json";

const Form = () => {
  const [showModal, setShowModal] = useState(false);
  const [userInformation, setUserInformation] = useState({});

  const handleConfirmation = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <div className={styles.form}>
        <form onSubmit={event.preventDefault()}>
          {/* <form action="" onSubmit={console.log("Send")}> */}
          <div className={styles.formContainer}>
          <div className={styles.nameForm}>
            <h2>Name</h2>
            <label htmlFor="title">Title</label>
            <select
              className={styles.title}
              name="title"
              id="title"
              required
              value={userInformation.userTitle}
              onChange={(e) => {
                setUserInformation({
                  ...userInformation,
                  userTitle: e.target.value,
                });
              }}
            >
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Ms.">Ms.</option>
            </select>
            <label>First Name</label>
            <input
              value={userInformation.userName}
              onChange={(e) => {
                setUserInformation({
                  ...userInformation,
                  userName: e.target.value,
                });
              }}
              type="text"
              name="First name"
              placeholder="Enter your first name"
              required
            />
            <label htmlFor="lastname">Last Name</label>
            <input
              value={userInformation.userLastName}
              onChange={(e) => {
                setUserInformation({
                  ...userInformation,
                  userLastName: e.target.value,
                });
              }}
              type="text"
              name="lastname"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className={styles.mailForm}>
            <h2>Email</h2>
            <label htmlFor="email">Email</label>
            <input
              value={userInformation.userEmail}
              onChange={(e) => {
                setUserInformation({
                  ...userInformation,
                  userEmail: e.target.value,
                });
              }}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email adress"
              required
            />
            <label htmlFor="confirmEmail">Confirm email</label>
            <input
              value={userInformation.userEmailConfirmation}
              onChange={(e) => {
                setUserInformation({
                  ...userInformation,
                  userEmailConfirmation: e.target.value,
                });
              }}
              type="email"
              name="confirmEmail"
              id="confirmEmail"
              placeholder="Confirm your email adress"
              required
            />
          </div>
          <div className={styles.adress}>
            <h2>Adress</h2>
            <label htmlFor="adressLine1">Adress Line 1</label>
            <input
              value={userInformation.adressLine1}
              onChange={(e) => {
                setUserInformation({
                  ...userInformation,
                  adressLine1: e.target.value,
                });
              }}
              type="text"
              name="adressLine1"
              id="adressLine1"
              placeholder="Enter your adress"
              required
            />
            <label htmlFor="adressLine2">Adress Line 2</label>
            <input
              value={userInformation.adressLine2}
              onChange={(e) => {
                setUserInformation({
                  ...userInformation,
                  adressLine2: e.target.value,
                });
              }}
              type="text"
              name="adressLine2"
              id="adressLine2"
              placeholder="Enter your complement adress"
            />
            <br />
            <label htmlFor="city">City</label>
            <input
              value={userInformation.userCity}
              onChange={(e) => {
                setUserInformation({
                  ...userInformation,
                  userCity: e.target.value,
                });
              }}
              type="text"
              name="city"
              id="city"
              placeholder="Enter your city"
              required
            />
            <br />
            <label htmlFor="state">State / Region / Province</label>
            <input
              value={userInformation.userStateRegionProvince}
              onChange={(e) => {
                setUserInformation({
                  ...userInformation,
                  usersStateRegionProvince: e.target.value,
                });
              }}
              type="text"
              name="state"
              id="state"
              placeholder="Enter your State / Region / Province"
            />
            <label htmlFor="postalCode">Zip / Postal Code</label>
            <input
              type="text"
              placeholder="Enter Your Zip / Postal Code"
              value={userInformation.userZip}
              onChange={(e) => {
                setUserInformation({
                  ...userInformation,
                  userZip: e.target.value,
                });
              }}
            />
            <label htmlFor="country">Country</label>
            {/* <input
              value={userInformation.userCountry}
              onChange={(e) => {
                setUserInformation({
                  ...userInformation,
                  userCountry: e.target.value,
                });
              }}
              type="text"
              name="country"
              id="country"
              placeholder="Enter Your Country"
              required
            /> */}
            {
              <select
                value={userInformation.userCountry}
                onChange={(e) => {
                  setUserInformation({
                    ...userInformation,
                    userCountry: e.target.value,
                  });
                }}
              >
                {countries.map((country, index) => (
                  <option key={index} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            }
          </div>
          <div className={styles.phoneNumber}>
            <h2>Phone Number</h2>
            <label htmlFor="phone1">Phone Number 1</label>
            <input
              value={userInformation.userPhoneNumber1}
              onChange={(e) => {
                setUserInformation({
                  ...userInformation,
                  userPhoneNumber1: e.target.value,
                });
              }}
              type="tel"
              name="phone1"
              id="phone1"
              pattern="[0-9]{2}[0-9]{4}[0-9]{4}"
              required
              placeholder="0123456789"
            />
            <label htmlFor="phone2">Phone Number 2</label>
            <input
              value={userInformation.userPhoneNumber2}
              onChange={(e) => {
                setUserInformation({
                  ...userInformation,
                  userPhoneNumber2: e.target.value,
                });
              }}
              type="text"
              name="phone2"
              id="phone2"
              placeholder="Enter your phone number"
            />
          </div>
          <div className={styles.availableDates}>
            <h2>Availables Dates</h2>
            <label htmlFor="availableDates">Avialable Dates</label>
            <input
              type="date"
              name="avilableDates"
              id="availableDates"
              value={userInformation.availableDates}
              onChange={(e) => {
                setUserInformation({
                  ...userInformation,
                  availableDates: e.target.value,
                });
              }}
            />
          </div>
          <button
            type="submit"
            className={styles.buttonSubmit}
            onClick={handleConfirmation}
          >
            Save & Continue
          </button>
          {showModal && (
            <div className={styles.showModal}>
              <h1>Please confirm your information</h1>
              <span>
                <h3>Title:</h3>
                <p>{userInformation.userTitle}</p>
              </span>
              <span>
                <h3>Name: </h3>
                <p>{userInformation.userName}</p>
              </span>
              <span>
                <h3>Last name: </h3>
                <p>{userInformation.userLastName}</p>
              </span>
              <span>
                <h3>Email: </h3>
                <p>{userInformation.userEmail}</p>
              </span>
              <span>
                <h3>Adress: </h3>
                <p>{userInformation.adressLine1}</p>
              </span>
              <span>
                <h3>Adress:</h3>
                <p> {userInformation.adressLine2}</p>
              </span>
              <span>
                <h3>City: </h3>
                <p>{userInformation.userCity}</p>
              </span>
              <span>
                <h3>State / Region / Province:</h3>
                <p>{userInformation.userStateRegionProvince}</p>
              </span>
              <span>
                <h3>Zip / Postal code: </h3>
                <p>{userInformation.userZip}</p>
              </span>
              <span>
                <h3>Country: </h3>
                <p>{userInformation.userCountry}</p>
              </span>
              <span>
                <h3>Phone number 1: </h3>
                <p>{userInformation.userPhoneNumber1}</p>
              </span>
              <span>
                <h3>Phone number 2: </h3>
                <p>{userInformation.userPhoneNumber2}</p>
              </span>
              <span>
                <h3>Day: </h3>
                <p>{userInformation.availableDates}</p>
              </span>
              <button
                type="submit"
                className={styles.closeModal}
                onClick={() => {
                  setShowModal(!showModal);
                }}
              >
                Continue
              </button>
            </div>
          )}
        </form>
      </div>
      <div className={styles.quartiers}>
        <Bronx></Bronx>
        <Brooklyn></Brooklyn>
        <Mannatthan></Mannatthan>
      </div>
      
    </>
  );
};
export default Form;
