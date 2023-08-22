import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useResize } from "../../shared/hooks/useResize";

import { HTag, PTag, Wrapper } from "../../shared/ui";

import styles from "./Salary.module.scss";

export const Salary = () => {
  const [large] = useResize(960);
  const [medium] = useResize(720);
  const tabs = [
    {
      icon: "",
      color: "",
      label: "Python",
      fullName: "Python-разработчик",
      gradation: [
        {
          label: "junior",
          salary: "350 000 ₸",
        },
        {
          label: "middle",
          salary: "638 000 ₸",
        },
        {
          label: "senior",
          salary: "от 800 000 ₸",
        },
      ],
    },
    {
      icon: "",
      color: "",
      label: "Frontend",
      fullName: "Frontend-разработчик",
      gradation: [
        {
          label: "junior",
          salary: "330 000 ₸",
        },
        {
          label: "middle",
          salary: "612 000 ₸",
        },
        {
          label: "senior",
          salary: "от 800 000 ₸",
        },
      ],
    },
    {
      icon: "",
      label: "Unity",
      fullName: "Unity-разработчик",
      gradation: [
        {
          label: "junior",
          salary: "380 000 ₸",
        },
        {
          label: "middle",
          salary: "480 000 ₸",
        },
        {
          label: "senior",
          salary: "от 700 000 ₸",
        },
      ],
    },
    {
      icon: "",
      color: "",
      label: "PHP",
      fullName: "PHP-разработчик",
      gradation: [
        {
          label: "junior",
          salary: "320 000 ₸",
        },
        {
          label: "middle",
          salary: "640 000 ₸",
        },
        {
          label: "senior",
          salary: "от 750 000 ₸",
        },
      ],
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <Wrapper>
      <div className={styles.root}>
        <div className={styles.heading}>
          <HTag variant="h3">Зарплаты специалистов в IT</HTag>
          <PTag style={{ maxWidth: 540, marginTop: 20 }}>
            Зарплаты в IT сильно зависят от уровня навыков и знаний технологий,
            ниже приведены средние данные на основе популярных платформ с
            вакансиями в Казахстане.
          </PTag>
        </div>
        <div className={styles.window}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {tabs.map((item) => (
                <li
                  key={item.label}
                  className={
                    item.label === selectedTab.label ? styles.selected : ""
                  }
                  onClick={() => setSelectedTab(item)}
                >
                  <PTag>{item.label}</PTag>
                  {item.label === selectedTab.label ? (
                    <motion.div
                      className={styles.underline}
                      layoutId="underline"
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab.label}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ backgroundColor: selectedTab.color }}
                className={styles.content}
              >
                <HTag variant="h4">{selectedTab.fullName}</HTag>
                <div className={styles.col}>
                  {selectedTab.gradation.map((item, index) => (
                    <div className={styles.item}>
                      <PTag style={{ marginBottom: 5 }}>{item.label}</PTag>
                      <div className={styles.row}>
                        <div
                          style={{
                            width: `calc(23% * ${index + 1})`,
                            height: 30,
                            backgroundColor: "#175dc7",
                            borderRadius: 7,
                          }}
                        ></div>
                        <PTag style={{ minWidth: 120 }}>{item.salary}</PTag>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
