import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import Header from "../components/header/header";
import { loginUser, USER_LOGIN } from "../services/actions";
import { useAppDispatch, useAppSelector } from "../utils/types";
import styles from "./pages.module.css";

export const Login = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const { email, password, loggedIn } = useAppSelector((state) => {
    return {
      email: state.user.email,
      password: state.user.password,
      loggedIn: state.user.loggedIn,
    };
  });

  const handleChange = useCallback(
    (evt) => {
      const { name, value } = evt.target;
      dispatch({ type: USER_LOGIN, payload: { [name]: value } });
    },
    [dispatch]
  );

  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      dispatch(loginUser({ email, password }, history));
    },
    [dispatch, email, password, history]
  );

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={`${styles.form__block} pt-20`}>
          <h1 className="text text_type_main-medium mb-6">Вход</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className="mb-6">
              <Input
                type={"email"}
                placeholder={"E-mail"}
                onChange={(e) => handleChange(e)}
                value={email}
                name={"email"}
                error={false}
                errorText={"Ошибка"}
                size={"default"}
              />
            </div>
            <div className="mb-6">
              <PasswordInput
                onChange={(e) => handleChange(e)}
                value={password}
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
