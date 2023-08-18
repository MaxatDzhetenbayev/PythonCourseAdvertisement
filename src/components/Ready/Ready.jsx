import React from "react";
import styles from "./Ready.module.scss";
import { Button, HTag, PTag, Wrapper } from "../../shared/ui";
import { Modal } from "../../shared/ui/Modal/Modal";
import { EnrollInCourse } from "../../shared/ui/Modal/ModalContents/EnrollInCourse/EnrollInCourse";
import { useModal } from "../../shared/hooks/useModal";

export const Ready = () => {
  const [isView, open, close] = useModal();

  return (
    <section className={styles.root}>
      <Wrapper>
        <div className={styles.ready}>
          <HTag style={{ textAlign: "center" }} variant="h3">
            Готовы попробовать прямо сейчас?
          </HTag>
          <PTag style={{ textAlign: "center" }}>
            Оставьте заявку, и мы расскажем, как пройти бесплатные курсы
            профессии
          </PTag>
          <Button handleCLick={open}>Хочу попробывать!</Button>
        </div>
        <Modal
          onClose={close}
          content={<EnrollInCourse onClose={close} />}
          isView={isView}
        />
      </Wrapper>
    </section>
  );
};
