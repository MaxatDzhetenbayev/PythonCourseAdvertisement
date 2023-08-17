import React from "react";
import { Wrapper } from "../../shared/ui";

import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { LiaTelegramPlane } from "react-icons/lia";
import logo from "../../assets/logo.png";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <Wrapper>
        <div className={styles.footer}>
          <img src={logo} className={styles.footer_logo} alt="" />
          <ul className={styles.footer_sociallist}>
            <li className={styles.footer_socialItem}>
              <a
                target="_blank"
                href="https://www.instagram.com/deltaeducation.info/"
              >
                <AiOutlineInstagram />
              </a>
            </li>
            <li className={styles.footer_socialItem}>
              <a target="_blank" href="https://web.telegram.org/k/#@Delta_LLP">
                <LiaTelegramPlane />
              </a>
            </li>
            <li className={styles.footer_socialItem}>
              <a target="_blank" href="https://wa.me/+77713020220">
                <AiOutlineWhatsApp />
              </a>
            </li>
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
