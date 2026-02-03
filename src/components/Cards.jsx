import React from "react";
import styles from "../Styles/Cards.module.css";
import CardData from "../Data/CardData";

const Cards = ({title, description}) => {

  return (
    <div className={styles.card}>
      <div className={styles.icons}>icon</div>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>Read More</span>
    </div>
  );
};

export default Cards;
