import React from "react";
import Cards from "./Cards";
import styles from "../modules/CardSection.module.css";

const CardSection = () => {
  return (
    <div className={`${styles.Wrapper} container`}>
      <Cards
        title="Innovative Solutions"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <Cards
        title="Innovative Solutions"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Cards
        title="Innovative Solutions"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Cards
        title="Innovative Solutions"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
};

export default CardSection;
