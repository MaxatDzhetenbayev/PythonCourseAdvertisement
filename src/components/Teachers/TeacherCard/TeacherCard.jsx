import React from "react";
import { HTag, PTag } from "../../../shared/ui";
import teacher from "../../../assets/images/teachers/Andrey.jpg";

import styles from "./TeacherCard.module.scss";

const divStyle = {
  backgroundImage: `url(${teacher})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const TeacherCard = () => {
  return (
    <div className={styles.root}>
      <PTag>
        Более 8 лет в программировании. Начинал с PHP в маленькой веб-студии.
        Сейчас — Python-разработчик рекламной сети Mail.ru Group. Имеет широкий
        круг профессиональных интересов: от построения распределенных систем до
        машинного обучения
      </PTag>
      <div className={styles.person}>
        <div style={divStyle} className={styles.person_img}></div>
        <HTag style={{ paddingTop: "20px" }} variant="h4">
          Андрей Ларин
        </HTag>
      </div>
    </div>
  );
};
