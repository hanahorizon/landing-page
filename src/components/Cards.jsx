import React from "react";
import styles from "../modules/Cards.module.css";

const Cards = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.icons}>icon</div>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <span>Read More</span>
    </div>
  );
};

export default Cards;
