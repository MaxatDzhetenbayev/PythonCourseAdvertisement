import React from "react";
import { motion } from "framer-motion";
import { Wrapper } from "../../shared/ui";

import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { LiaTelegramPlane } from "react-icons/lia";
import logo from "../../assets/logo.png";


import styles from "./Footer.module.scss";

const socialLinkList = [
  {
    svg: <AiOutlineInstagram className={styles.instagram} />,
    link: "https://www.instagram.com/deltaeducation.info/",
  },
  {
    svg: <LiaTelegramPlane className={styles.telegram} />,
    link: "https://web.telegram.org/k/#@Delta_LLP",
  },
  {
    svg: <AiOutlineWhatsApp className={styles.whatsapp} />,
    link: "https://wa.me/+77713020220",
  },
];

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <Wrapper>
        <div className={styles.footer}>
          <img src={logo} className={styles.footer_logo} alt="" />
          <ul className={styles.footer_sociallist}>
            {socialLinkList.map((item) => (
              <motion.li
                whileHover={{ scale: 1.3 }}
                className={styles.footer_socialItem}
              >
                <a target="_blank" href={item.link}>
                  {item.svg}
                </a>
              </motion.li>
            ))}
          </ul>

          <ul>
            <li>
              <p>ТОО «Delta Education»</p>
            </li>
            <li>
              <p>Республика Казахстан, г. Семей</p>
            </li>
            <li>
              <p>ул. Гагарина 32</p>
            </li>
          </ul>
        </div>
      </Wrapper>
    </footer>
  );
};
