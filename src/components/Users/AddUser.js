import { useState } from "react";
import Card from "../../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../../UI/Button";

function AddUser() {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  function addUserHandler(e) {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
      return;
    if (+enteredAge < 1) return;
    console.log(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  }

  function usernameChangeHandler(e) {
    setEnteredUsername(e.target.value);
  }

  function ageChangeHandler(e) {
    setEnteredAge(e.target.value);
  }

  return (
    <Card styles={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
