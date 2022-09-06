import Card from "../../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../../UI/Button";

function AddUser() {
  function addUserHandler(e) {
    e.preventDefault();
  }

  return (
    <Card styles={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
