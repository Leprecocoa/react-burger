import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/header";
import styles from "./pages.module.css";

export const ResetPassword = () => {
  const [passwordValue, setPasswordValue] = useState("");
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
              <PasswordInput
                onChange={(e) => setPasswordValue(e.target.value)}
                value={passwordValue}
                name={"password"}
              />
            </div>
            <div className="mb-6">
              <Input
                type={"text"}
                placeholder={"Введите код из письма"}
                onChange={(e) => setEmailValue(e.target.value)}
                value={emailValue}
                name={"code"}
                error={false}
                errorText={"Ошибка"}
                size={"default"}
              />
            </div>
            <Button type="primary" size="medium">
              Сохранить
            </Button>
          </form>
          <p className="text text_type_main-default text_color_inactive mt-20">
            Вспомнили пароль?{" "}
            <Link to="/login" className={styles.link}>
              Войти
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
