import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../components/header/header";
import { registerUser, USER_REGISTER } from "../services/actions";
import { useAppDispatch, useAppSelector } from "../utils/types";
import styles from "./pages.module.css";

export const Register = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const { email, password, name } = useAppSelector((state) => {
    return {
      email: state.user.email,
      password: state.user.password,
      name: state.user.name,
      loggedIn: state.user.loggedIn,
    };
  });

  const handleChange = useCallback(
    (evt) => {
      const { name, value } = evt.target;
      dispatch({ type: USER_REGISTER, payload: { [name]: value } });
    },
    [dispatch]
  );

  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      dispatch(registerUser({ email, password, name }, history));
    },
    [dispatch, email, name, password, history]
  );

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={`${styles.form__block} pt-20`}>
          <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className="mb-6">
              <Input
                type={"text"}
                placeholder={"Имя"}
                onChange={(e) => handleChange(e)}
                value={name}
                name={"name"}
                error={false}
                errorText={"Ошибка"}
                size={"default"}
              />
            </div>
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
              Зарегистрироваться
            </Button>
          </form>
          <div>
            <p className="text text_type_main-default text_color_inactive mt-20">
              Уже зарегистрированы?{" "}
              <Link to="/login" className={styles.login}>
                Войти
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
