import React from "react";
import styles from "./ErrorModal.module.scss"; // Assuming the styling file exists
import DynamicButton from "../UI/DynamicButton";
const ErrorModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Ошибка</h2>
        <p className={styles.message}>Ошибка при добавлении статьи.</p> 
        <DynamicButton 
          label="Попробовать снова" 
          onClick={onClose}  
        />
      </div>
    </div>
  );
};

export default ErrorModal;
