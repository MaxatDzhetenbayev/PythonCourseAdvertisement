import React from "react";
import { PTag, HTag, Button, Clouds, Wrapper, Modal } from "../../shared/ui";
import { EnrollInCourse } from "../../shared/ui/Modal/ModalContents/EnrollInCourse/EnrollInCourse";

import { clouds_list } from "../../shared/consts/consts";

import PythonImage from "../../assets/images/welcome-python.svg";
import styles from "./Welcome.module.scss";
import { useModal } from "../../shared/hooks/useModal";

export const Welcome = () => {
  const [isView, open, close] = useModal();

  return (
    <Wrapper>
      <div className={styles.welcome}>
        <PTag variant="sm" className={styles.welcome_headText}>
          Курс с нуля до трудоустройства за 6 месяцев
        </PTag>
        <div className={styles.welcome_content}>
          <div className={styles.welcome_text}>
            <HTag variant="h4">Профессия</HTag>
            <HTag variant="h1">«Python-разработчик»</HTag>
            <PTag className={styles.welcome_mainText}>
              Освойте один из самых популярных языков для бэкенда, научитесь
              создавать полноценные сайты и веб-приложения и реализовать
              внутреннюю логику работы программ на фреймворке Django
            </PTag>
            <Button handleCLick={open} style={{ marginTop: "20px" }}>
              Начать учиться
            </Button>
          </div>
          <img src={PythonImage} alt="" />
        </div>
        <div className={styles.welcome_clouds}>
          {clouds_list.map((cloud) => (
            <Clouds key={cloud} size="sm">
              {cloud}
            </Clouds>
          ))}
        </div>

        <Modal
          onClose={close}
          content={<EnrollInCourse onClose={close} />}
          isView={isView}
        />
      </div>
    </Wrapper>
  );
};
