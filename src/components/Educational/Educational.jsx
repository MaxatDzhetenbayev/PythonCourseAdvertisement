import React, { useEffect, useState } from "react";
import { HTag, PTag, Wrapper } from "../../shared/ui";
import { educationallist } from "../../shared/consts/consts";
import { AiOutlineDingding } from "react-icons/ai";
import image from "../../assets/images/educational.png";
import styles from "./Educational.module.scss";

export const Educational = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isAdaptive = windowWidth < 1200;

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const info = [
    {
      title: "Обучаем разработчиков",
      text: "с 2012 года",
    },
    {
      title: "студентов учатся на сайте ежемесячно",
      text: "17 000",
    },
    {
      title: "30+ компаний-партнеров",
      text: "где собеседуют наших выпускников",
    },
  ];

  return (
    <Wrapper>
      <div className={styles.root}>
        <div className={styles.content}>
          <HTag variant="h3">Delta — образовательная платформа</HTag>
          <PTag variant="md">
            Обучаем программированию новичков и практикующих разработчиков
          </PTag>
          <div className={styles.content_main}>
            <ul className={styles.content_mainList}>
              {educationallist.map((item) => (
                <PTag key={item}>
                  <AiOutlineDingding /> {item}
                </PTag>
              ))}
            </ul>
            {isAdaptive === false && (
              <img src={image} width={230} height={200} alt="" />
            )}
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottom_list}>
            {info.map((item) => (
              <div key={item.title} className={styles.bottom_item}>
                <HTag variant="h4">{item.title}</HTag>
                <PTag>{item.text}</PTag>
              </div>
            ))}
          </div>
          {isAdaptive === true && (
            <img src={image} width={350} height={280} alt="" />
          )}
        </div>
      </div>
    </Wrapper>
  );
};
