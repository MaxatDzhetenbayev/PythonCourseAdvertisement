import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { Input } from "../../../shared/ui/Input/Input";
import { Button } from "../../../shared/ui";

import styles from "./Form.module.scss";

export const Form = ({ modalClose }) => {
  //   const { register, handleSubmit } = useForm();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Ваши данные были отправлены. Ожидайте обратной связи!");
    reset();
    if (modalClose) {
      modalClose();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: "Поле 'ФИО' обязательное",
          minLength: {
            value: 10,
            message: "Минимальное количество символов - 10",
          },
        }}
        render={({ field }) => (
          <Input {...field} placeholder={"Введите ваше ФИО"} />
        )}
      />
      {errors?.name && (
        <p className={styles.required}>{errors?.name?.message}</p>
      )}
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Поле 'email' обязательное",
          pattern: {
            value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
            message: "Ваш email должен быть в формате: example@example.com(ru)",
          },
        }}
        render={({ field }) => (
          <Input {...field} placeholder={"Введите ваш email"} />
        )}
      />
      {errors?.email && (
        <p className={styles.required}>{errors?.email?.message}</p>
      )}
      <Controller
        name="phone"
        control={control}
        rules={{
          required: "Поле 'телефон' обязательное",
          pattern: {
            value: /^8 \d{1,3} \d{3} \d{2} \d{2}$/,
            message: "Ваш номер должен быть в виде: 8 XXX XXX XX XX",
          },
        }}
        render={({ field }) => (
          <Input {...field} placeholder={"Введите ваш номер телефона"} />
        )}
      />
      {errors?.phone && (
        <p className={styles.required}>{errors?.phone?.message}</p>
      )}

      <Button>Начать Учиться</Button>
      <p className={styles.agreement}>
        Отправляя форму, вы принимаете
        <span>«Соглашение об обработке персональных данных»</span> и условия
        «Оферты», а также соглашаетесь с <span>«Условиями использования»</span>
      </p>
    </form>
  );
};
