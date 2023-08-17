import React from "react";
import styles from "./EnrollInCourse.module.scss";
import { HTag, PTag } from "../../../";
import { Form } from "../../../../../components/StartLearning/Form/Form";
export const EnrollInCourse = ({ onClose }) => {
  return (
    <div className={styles.root}>
      <HTag variant="h4">Оставьте заявку на обучение профессии</HTag>
      <PTag>
        Пройдите бесплатные курсы, чтобы познакомиться с форматом и
        протестировать обучение
      </PTag>
      <Form modalClose={onClose} />
    </div>
  );
};
