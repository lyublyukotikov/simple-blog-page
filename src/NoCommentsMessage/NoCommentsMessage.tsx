import React from "react";
import styles from "./NoCommentsMessage.module.scss";

const NoCommentsMessage: React.FC = () => {
  return <p className={styles.noComments}>Комментариев пока нет.</p>;
};

export default NoCommentsMessage;
