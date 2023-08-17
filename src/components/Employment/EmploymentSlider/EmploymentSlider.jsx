import React, { useRef, useState } from "react";
import logo from "../../../assets/logo.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

import styles from "./EmploymentSlider.module.scss";

// import required modules
import { Navigation, Grid } from "swiper/modules";
import { HTag } from "../../../shared/ui";

export const EmploymentSlider = () => {
  return (
    <>
      <HTag style={{ marginTop: "60px", textAlign: "center" }} variant="h3">
        Здесь работают наши выпускники
      </HTag>
      <Swiper
        navigation={true}
        modules={[Navigation, Grid]}
        className={styles.slider}
        slidesPerView={1}
        slidesPerGroup={1}
        breakpoints={{
          960: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          540: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: {
              rows: 2,
            },
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide className={styles.slider_item}>
          <img src={logo} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.slider_item}>
          <img src={logo} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.slider_item}>
          <img src={logo} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.slider_item}>
          <img src={logo} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.slider_item}>
          <img src={logo} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.slider_item}>
          <img src={logo} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.slider_item}>
          <img src={logo} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.slider_item}>
          <img src={logo} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.slider_item}>
          <img src={logo} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.slider_item}>
          <img src={logo} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.slider_item}>
          <img src={logo} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.slider_item}>
          <img src={logo} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
