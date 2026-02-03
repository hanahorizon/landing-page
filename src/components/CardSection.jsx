import React from "react";
import Cards from "./Cards";
import CardData from "../Data/Home";
import styles from "../Styles/CardSection.module.css";

const CardSection = () => {
  return (
    <section className={`${styles.Wrapper} container`}>
      {CardData.map((data, index)=> (
        <Cards key={index} title= {data.title} description={data.description} />
      ))}
    </section>
  );
};

export default CardSection;
