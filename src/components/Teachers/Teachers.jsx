import React from "react";
import { HTag, Wrapper } from "../../shared/ui";
import { TeacherCard } from "./TeacherCard/TeacherCard";
import styles from "./Teachers.module.scss";
export const Teachers = () => {
  return (
    <Wrapper>
      <div className={styles.root}>
        <HTag variant="h3">Наставники — практикующие разработчики</HTag>
        <div className={styles.teacher_list}>
          {[1, 2, 3, 4].map((index) => (
            <TeacherCard key={index} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
