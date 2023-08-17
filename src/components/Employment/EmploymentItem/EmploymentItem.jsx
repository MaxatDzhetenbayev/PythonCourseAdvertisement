import React from "react";
import { HTag, PTag } from "../../../shared/ui";

import styles from "./EmploymentItem.module.scss";

export const EmploymentItem = ({ title, text }) => {
  return (
    <div className={styles.root}>
      <HTag variant="h4">{title}</HTag>
      <PTag>{text}</PTag>
    </div>
  );
};
