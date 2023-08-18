import React from "react";

import { TeacherCard } from "./TeacherCard/TeacherCard";

import { HTag, Wrapper } from "../../shared/ui";
import { teachersList } from "../../shared/consts/consts";

import styles from "./Teachers.module.scss";
export const Teachers = () => {
  return (
    <Wrapper>
      <div className={styles.root}>
        <HTag variant="h3">Наставники — практикующие разработчики</HTag>
        <div className={styles.teacher_list}>
          {teachersList.map((data, index) => (
            <TeacherCard key={index} {...data} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
