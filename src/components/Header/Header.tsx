import React from "react";
import styles from "../Header/Header.module.scss";
import DynamicButton from "../DynamicButton/DynamicButton";
import { HeaderProps } from "../../models/HeaderProps";

const Header: React.FC<HeaderProps> = ({
  openDescriptionBlog,
  openAddDrawer,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <h2 className={styles.headerTitle}>Блог поклонников Гарри Поттера</h2>
        <div className={styles.buttonGroup}>
          {/* Кнопка для открытия описания */}
          <DynamicButton label="Описание" onClick={openDescriptionBlog} />
          {/* Кнопка для добавления новой статьи */}
          <DynamicButton label="Добавить статью" onClick={openAddDrawer} />
        </div>
      </div>
    </header>
  );
};

export default Header;
