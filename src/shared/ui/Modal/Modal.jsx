import React from "react";
import { ModalContainer } from "./ModalContainer/ModalContainer";
import styles from "./Modal.module.scss";

export const Modal = ({ content, onClose }) => {
  return (
    <div className={styles.root}>
      <ModalContainer onClose={onClose}>{content}</ModalContainer>
    </div>
  );
};
