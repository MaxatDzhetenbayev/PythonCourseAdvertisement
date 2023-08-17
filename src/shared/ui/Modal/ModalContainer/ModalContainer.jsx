import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./ModalContainer.module.scss";

export const ModalContainer = ({ children, onClose }) => {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <button onClick={onClose}>
          <AiOutlineClose />
        </button>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
