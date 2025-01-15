import React from "react";
import styles from "./DynamicButton.module.scss";
import DynamicButtonProps from "../models/DynamicButtonProps"

const DynamicButton: React.FC<DynamicButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default DynamicButton;
