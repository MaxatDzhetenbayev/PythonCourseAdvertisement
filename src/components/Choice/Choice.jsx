import React from "react";

import { Button, HTag, Wrapper } from "../../shared/ui";
import styles from "./Choice.module.scss";
import { Modal } from "../../shared/ui/Modal/Modal";
import { EnrollInCourse } from "../../shared/ui/Modal/ModalContents/EnrollInCourse/EnrollInCourse";
import { useModal } from "../../shared/hooks/useModal";

export const Choice = () => {
  const [isView, open, close] = useModal();

  return (
    <div className={styles.root}>
      <Wrapper>
        <div className={styles.choice}>
          <div className={styles.choice_container}>
            <HTag variant="h3">Сомневаетесь в выборе?</HTag>
            <div className={styles.choice_inner}>
              <HTag variant="h4">
                Выслушаем, порекомендуем или отговорим от обучения
              </HTag>
              <Button handleCLick={open}>Начать учиться</Button>
            </div>
          </div>
        </div>
      </Wrapper>
      {isView && (
        <Modal onClose={close} content={<EnrollInCourse onClose={close} />} />
      )}
    </div>
  );
};
