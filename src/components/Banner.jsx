import React from "react";
import styles from "../Styles/Banner.module.css";

const Banner = (Props) => {
  return (
    <div className={`${styles.banner} container`}>
      <div className={styles.heading}>
        <h2>{Props.title}</h2>
        <p>{Props.subtitle}</p>
       
          <button className={styles.detailsBtn}>{Props.buttonText}</button>
        
      </div>

      <div className={styles.bannerImg}>
        <img src={Props.bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
