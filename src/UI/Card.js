import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={`${styles.card} ${props.styles}`}>{props.children}</div>
  );
}

export default Card;
