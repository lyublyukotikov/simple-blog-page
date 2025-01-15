import React, { useRef } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import styles from "../DescriptionDrawer/DrawerAdd.module.scss";
import { HeaderProps } from "../../../models/HeaderProps";
import ModalTemplate from "../ModalTemplate/ModalTemplate";
const DescriptionDrawer: React.FC<HeaderProps> = ({ closeModalWindow }) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  useOutsideClick(drawerRef, closeModalWindow);

  return (
    <ModalTemplate closeModalWindow={closeModalWindow} drawerRef={drawerRef}>
      <h2 className={styles.title}>Добро пожаловать!</h2>
      <p className={styles.text}>
        Это блог, посвящённый миру Гарри Поттера! Здесь вы найдёте увлекательные
        статьи, теории, факты и многое другое, связанное с магическим миром.
      </p>
    </ModalTemplate>
  );
};

export default DescriptionDrawer;
