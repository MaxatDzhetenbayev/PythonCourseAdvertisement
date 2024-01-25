import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { toast} from "react-toastify";
import { Input } from "../../../shared/ui/Input/Input";
import { Button } from "../../../shared/ui";
import styles from "./Form.module.scss";

export const Form = ({ modalClose }) => {
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
    axios
      .post(
        "https://courses-registration-db.vercel.app/registration",
        {
          ...data,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          toast.success(
            "Ваши данные были отправлены. Ожидайте обратной связи!"
          );
        }
      })
      .catch(() => {
        toast.error("Ошибка! Ваши данные не были отправлены");
      });
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
          minLength: {
            value: 10,
            message: "Минимальное количество символов - 10",
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
