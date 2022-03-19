import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/header";
import styles from "./pages.module.css";

export const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={`${styles.form__block} pt-20`}>
          <h1 className="text text_type_main-medium mb-6">Вход</h1>
          <form className={styles.form}>
            <div className="mb-6">
              <Input
                type={"email"}
                placeholder={"E-mail"}
                onChange={(e) => setEmailValue(e.target.value)}
                value={emailValue}
                name={"email"}
                error={false}
                errorText={"Ошибка"}
                size={"default"}
              />
            </div>
            <div className="mb-6">
              <PasswordInput
                onChange={(e) => setPasswordValue(e.target.value)}
                value={passwordValue}
                name={"password"}
              />
            </div>
            <Button type="primary" size="medium">
              Войти
            </Button>
          </form>
          <div className={styles.register}>
            <p className="text text_type_main-default text_color_inactive mt-20">
              Вы — новый пользователь?{" "}
              <Link to="/register" className={styles.link}>
                Зарегистрироваться
              </Link>
            </p>
          </div>
          <div className={styles.forgot_password}>
            <p className="text text_type_main-default text_color_inactive mt-4">
              Забыли пароль?{" "}
              <Link to="/forgot-password" className={styles.link}>
                Восстановить пароль
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
