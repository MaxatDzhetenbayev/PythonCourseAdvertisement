import React from "react";
import logo from "../../assets/logo-alternative.png";
import styles from "./Header.module.scss";
import { Wrapper } from "../../shared/ui";

export const Header = () => {
  return (
    <Wrapper>
      <div className={styles.header}>
        <img src={logo} alt="" />
      </div>
    </Wrapper>
  );
};
