import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/header";
import styles from "./pages.module.css";

export const ForgotPassword = () => {
  const [emailValue, setEmailValue] = useState("");

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={`${styles.form__block} pt-20`}>
          <h1 className="text text_type_main-medium mb-6">
            Восстановление пароля
          </h1>
          <form className={styles.form}>
            <div className="mb-6">
              <Input
                type={"email"}
                placeholder={"Укажите e-mail"}
                onChange={(e) => setEmailValue(e.target.value)}
                value={emailValue}
                name={"email"}
                error={false}
                errorText={"Ошибка"}
                size={"default"}
              />
            </div>
            <Button type="primary" size="medium">
              Восстановить
            </Button>
          </form>
          <div>
            <p className="text text_type_main-default text_color_inactive mt-20">
              Вспомнили пароль?{" "}
              <Link to="/login" className={styles.link}>
                Войти
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
